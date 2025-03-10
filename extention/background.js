chrome.runtime.onInstalled.addListener(() => {
  console.log("Text Summarizer Extension Installed");
  chrome.alarms.create("mentalHealthBreak", { delayInMinutes: 10, periodInMinutes: 10 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "mentalHealthBreak") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Mental Health Break",
      message: "You’ve been seeing a lot of heavy content. Take a deep breath.",
      buttons: [{ title: "Take a break" }],
      priority: 2
    });
  }
});

chrome.notifications.onButtonClicked.addListener(() => {
  chrome.tabs.create({ url: "https://www.silencethementalnoise.com/breathing-exercise" });
});