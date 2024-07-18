document.addEventListener('DOMContentLoaded', function() {
    var a = document.getElementById("getContentButton");
    console.log(a)
    if (a) {
      a.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ["content.js"] });
        });
      });
    } else {
      console.error("Button element with ID 'getContentButton' not found.");
    }
  });