chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message == "sent download_video_url" ) {
			var url = request.url;
			$('[name="vid"]').val(url);
			$('[name="input"]').submit();
			//while(!$('[name="dlbutton"]').length)
			
			function check(){
				if($('[name="dlbutton"]').length)
				{
					$('[name="dlbutton"]').submit();
				}
				setInterval(function(){check();},2000);
			}
			//$('[name="dlbutton"]').waitUntilExists(alert('a'));
		}
	}
);