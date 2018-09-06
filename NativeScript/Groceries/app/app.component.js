"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <StackLayout>\n    <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n      autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n    <Button text=\"Sign in\" class=\"submit-button\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n  </StackLayout>\n",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFrQjFDLElBQWEsWUFBWTtJQUF6QjtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsWUFBWTtJQWhCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxvY0FVWDtRQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBRW5FLENBQUM7R0FDVyxZQUFZLENBQUc7QUFBZixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgPFN0YWNrTGF5b3V0PlxuICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG5cbiAgICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiB1cCBmb3IgR3JvY2VyaWVzXCI+PC9CdXR0b24+XG4gIDwvU3RhY2tMYXlvdXQ+XG5gLFxuc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9Il19