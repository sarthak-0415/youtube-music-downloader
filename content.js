// content.js

// content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action" ) {
			var href = window.location.href;

			console.log("going from content to background with url::..."+href+"...");

			chrome.runtime.sendMessage({"message": "current_tab_url", "url": href});
		}
	}
);