Personal chrome extension to download music files from youtube.

v 0.1
* First commit .
* Page redirects to download page.
* Click on download to download the link

v 0.2 (to be coded)
* one click download.
* check for download button to appear.

Flow of data :
* click on extension button to call ```background.js```
* ```background.js``` calls ```content.js``` for current video ```url```  using message ```clicked_browser_action```
* ```content.js``` calls back ```bachground.js``` with the video ```url``` using message ```current_tab_url```
* ```bacground.js``` fetches ```url``` from ```request``` and creates a new tab to save-mp3.com and injects ```download.js``` into the tab and passes ```url``` as variable.
* ```download.js``` fetches url from the variable and insert it into the text box and clicks the submit button

not working :
* wait for download button to appear and click.