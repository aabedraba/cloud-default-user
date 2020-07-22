chrome.browserAction.onClicked.addListener(function (tab) {
  const myNewUrl = tab.url + "&authuser=3";
  chrome.tabs.update({ url: myNewUrl });
});
