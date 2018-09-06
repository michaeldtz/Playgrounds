# build image
FROM golang:latest

# get dependencies and install
WORKDIR $GOPATH/src
RUN go get cloud.google.com/go/storage
RUN go get golang.org/x/net/context
RUN go get google.golang.org/api/iterator
RUN go get google.golang.org/appengine