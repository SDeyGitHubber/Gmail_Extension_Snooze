// Load the InboxSDK library
var sdk = require("inboxsdk");
var gapi=Window.gapi;
// Initialize the InboxSDK with your API key
sdk.load("1.0", "AIzaSyCXfHPh2iY9i5WgO3ZIcUyGMMHFPmRZxcs").then(function(sdk) {  
  // Create a button in the Gmail interface to snooze mails
  sdk.Toolbars.addToolbarButtonForApp({
    title: "Snooze",
    iconUrl: "icon.png",
    onClick: function(event) {
        var selectedEmail=sdk.Widgets.getSelectedEmails()[0];
        var emailId=selectedEmail.getMessageID();
        var snoozetime=new Date();
        snoozetime.setHours(snoozetime.getHours()+1);

        gapi.client.gmail.users.threads.modify({
            userId:"me",
            id: emailId,
            addLabelIds:["SNOOZE"],
            removeLabelIds:["INBOX"],
            resources:{
                addLabelIds:["SNOOZE"],
                removeLabelIds:["INBOX"]
            }
        }).then(function(response){
            console.log("Email has been snoozed successfully");
        });
    }
  });
});
