var contentTabId : any;
var list = [] as any;
var title = [] as any;

chrome.runtime.onMessage.addListener(function(msg,sender) {
  if (msg.from == "content") {  //get content scripts tab id
    contentTabId = sender?.tab?.id;
    list.push(msg.dataSend)
  }
  if (msg.from == "content" && contentTabId) {  //got message from popup
    chrome.tabs.sendMessage(contentTabId, {  //send it to content script
      from: "background",
      first: list,
    });
  }
});

export {}