chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message == "sent download_video_url" ) {
			var url = request.url;
			$('[id="youtube-url"]').val(url);
			$('#submit').trigger('click');
			
			console.log('in page');

			/*check();
			function check(){
				if(document.getElementsByName("dlbutton"))
				{
					//alert('in there');
					document.getElementsByName("dlbutton")[0].submit();
				}
				setInterval(function(){check();},2000);
			}*/
			//$('[name="dlbutton"]').waitUntilExists(alert('a'));
		}
	}
);