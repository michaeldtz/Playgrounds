/**
 * Created by michael on 19.10.14.
 */

angular.module('contentService', ['dbService'])
    .factory("contentService", function($http, $q, $ionicLoading, DB, DBContentItems, DBSettings){

        var appkey = "APa9733e2c622a40129a8005c9848c7243";
        var secret = "SC5b20e2b62f9540b88e0e04b06d4f58cb";

        var updateInterval = 864000000;



        var self = this;

        self.content = [];
        self.activeContentID = undefined;


        //Load the content
        function provideContent(forceRefresh){

            //create a defer
            var defer = $q.defer();

            //clear current content
            self.content.splice(0,self.content.length);

            //Set first page as active
            //self.activeContent = self.content[0];

            //Check if db is filled and up to date
            if(forceRefresh == true){
                loadContentFromServer(defer);
            } else {
                DBSettings.getById("IS_DATABASE_FILLED", "false")
                    .then(function(result){
                        if(result != "true"){
                            loadInitialContent(defer);
                            //loadContentFromServer(defer);
                        } else {
                            loadContentFromDB(defer);
                        }
                    });
            }

            return defer.promise;


        }

        function checkForUpdatesIfActive(){

            var defer = $q.defer();

            DBSettings.getById("AUTO_UPDATES_ACTIVE", "false")
                .then(function(active){
                    if(active == "true"){
                        DBSettings.getById("LAST_SERVER_UPDATE", 0)
                            .then(function(lastUpdate){
                                var nextUpdate = new Date().getTime() - updateInterval;
                                if(nextUpdate > lastUpdate){
                                    loadContentFromDB(defer);
                                } else {
                                    defer.reject("Update interval not reached");
                                }
                            });
                    } else {
                        defer.reject("Auto updates not active");
                    }
                });

            return defer.promise;

        }

        //Load the content from a file
        function loadInitialContent(defer){
            $http.get("js/content/initialContent.json")
                .success(function(data){
                    console.log("Loading " + data.length + " entries from initial content ");
                    for(var i = 0; i < data.length; i++){
                        self.content.push(data[i]);
                        DBContentItems.insertOrUpdate(data[i]);
                    }
                    defer.resolve(self.content);
                })
                .error(function(error,status){
                    defer.reject(error);
                });
        }

        //load the content from the database
        function loadContentFromDB(defer){
            DBContentItems.all()
                .then(function(data){
                    console.log("Loading " + data.length + " entries from db ");
                    for(var i = 0; i < data.length; i++){
                        self.content.push(data[i]);
                    }
                    defer.resolve(self.content);
                },function(error){
                    defer.reject(error);
                });
        }

        //Reload content from the server
        function loadContentFromServer(defer){

            $ionicLoading.show({
                template: "Loading content update..."
            });

            DBSettings.getById("LAST_SERVER_UPDATE",1422906592000).then(function(lastUpdate){

                $http.get("http://booksintoapps.appspot.com/services/load/contentchangeslist?appkey=" + appkey + "&secret=" + secret + "&since=" + lastUpdate)
                    .success(function(data){

                        var content = data;
                        //var media = data.media;

                        console.log("Loading " + content.length + " content entries from server ");
                        //console.log("Loading " + media.length + " media entries from server ");

                        for(var i = 0; i < content.length; i++){
                            DBContentItems.insertOrUpdate(content[i]);
                        }

                        DBSettings.set("IS_DATABASE_FILLED","STRING","true");
                        DBSettings.set("LAST_SERVER_UPDATE","INTEGER",new Date().getTime());

                        loadContentFromDB(defer);
                        $ionicLoading.hide();
                        //defer.resolve(self.content);
                    })
                    .error(function(error,status){
                        //defer.reject(error);
                        $ionicLoading.hide();
                        console.log("Loading data from server failed due to " + error);
                        loadContentFromDB(defer);

                    });

            });

        }

        //set selected index
        function setSelectedItem(itemID){
            self.activeContentID = itemID;
        }

        function getContentWithID(itemID){
            for(var i = 0; i < self.content.length; i++){
                if(self.content[i].id == itemID){
                    return self.content[i];
                }
            }

            return {};
        }

        //get active content
        function getActiveContent(){
            if(self.activeContentID == undefined){
                self.activeContentID = self.content[0].id;
            }
            return getContentWithID(self.activeContentID);
        }


        return {
            provideContent : provideContent,
            content : self.content,
            getActiveContent : getActiveContent,
            setSelectedItem : setSelectedItem,
            checkForUpdatesIfActive : checkForUpdatesIfActive
        };
    });


