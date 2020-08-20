chrome.browserAction.onClicked.addListener(function (tab) {
  let url = tab.url;
  let newUrl = "";
  if (!url.includes("authuser")) {
    newUrl += tab.url + "&authuser=3";
  } else {
    if (!url.includes("authuser=3"))
      newUrl += url.replace(/authuser=\d/, "authuser=3");
    else return;
  }
  chrome.tabs.update({ url: newUrl });
});
