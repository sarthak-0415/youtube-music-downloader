// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});

// This block is new!
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    	if( request.message === "current_tab_url" ) {
    		
    		var url = request.url;
    		var download_site_url = "http://save-mp3.com/";
    	  	
    	  	chrome.tabs.create({url: download_site_url,active: true}, function(tab){
    	  		
    	  		var newTabId = tab.id;
    	  		
    	  		//alert(url);
    	  		
    	  		/*
    	  		chrome.tabs.executeScript(newTabId,{code : "var options = {url : "+url+ "}"},function(tab){
    	  		});
    	  		*/
    	  	
		    
    	  		chrome.tabs.executeScript(newTabId, {file: "jquery-2.1.4.min.js"}, function(){
    	  			chrome.tabs.executeScript(newTabId, {file: "download.js"}, function(){
    	  				chrome.tabs.executeScript(newTabId, {file: "waituntilexists.js"}, function(){
    	  					chrome.tabs.sendMessage(newTabId, {"message": "sent download_video_url" , "url" : url});
    	  				});	
				    });
				});
				
    	  		/*
    	  		var href = window.location.href;
    	  		console.log("I am on this page now" + href +"...");
    	  		$('#vid').val(download_site_url);
    	  		$('#input').submit();
    	  		*/
    	  	});
    	}
  	}
);