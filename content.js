// Loading the InboxSDK library
import * as InboxSDK from "@inboxsdk/core";

console.log("hello world");

InboxSDK.load(2, "sdk_snoozegmail_f5429770ee").then((sdk) => {
  // the SDK has been loaded
  sdk.Compose.registerComposeViewHandler((composeView) => {
    // a compose view has come into existence
    composeView.addButton({
      title: "My Button!",
      iconUrl:
        "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
      onClick(event) {
        event.composeView.insertTextIntoBodyAtCursor("Hello World!");
      },
    });
  });

  // Define snooze options
  const snoozeOptions = [
    { label: "Later today", hours: 1 },
    { label: "Tomorrow", hours: 24 },
    { label: "Next week", hours: 168 },
    { label: "Next month", hours: 720 },
  ];

  // Creating snooze dropdown menu
  const snoozeMenu = sdk.Widgets.createDropdownMenu({
    title: "Snooze",
    iconUrl: "64_snooze_icon.png",
  });

  // Adding snooze options to dropdown menu
  snoozeOptions.forEach((option) => {
    snoozeMenu.addItem({
      title: option.label,
      onClick: function (event) {
        var selectedEmail = sdk.Widgets.getSelectedEmails()[0];
        var emailId = selectedEmail.getMessageID();
        var snoozetime = new Date();
        snoozetime.setHours(snoozetime.getHours() + option.hours);
        console.log("!!!debug", "event in ");
      },
    });
  });

  // Add dropdown menu to toolbar
  sdk.Toolbars.addToolbarButtonForApp(snoozeMenu);
});