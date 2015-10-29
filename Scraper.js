(function(){
	/*
	TODO
	-check URL to make sure script only runs on webhelpdesk and only on closed tickets
	-error handling (maybe give option to manually enter in information?)
		-will have to load in a popup or a side bar so they can copy and paste.
	-automatically attaching to clipboard.
	*/
	/*
	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	*/
	
	//Grab all of the different variables
	### I don't know how to find paths or convert them into a form javascript can read ###
	
	var tNumber = document.getElementById("clip_button_7_16_0_0_0_0_2_7_0_0_1_4_3_1_5_5_0_1_3_1_5_0_0_1_16_1_1_12_10").firstElementChild.text;
	var eventName = document.getElementById("subject").value
	var clientName = (document.getElementsByClassName("mailToLink")[0].firstElementChild).innerHTML.slice(14,-19) //this needs to be tested
	var techName = document.getElementById("assignedTechPopup")[Number(document.getElementById("assignedTechPopup").value)+1].text
	var startTime = scrapePage([path]); //make sure it is in Year-month-day+24hour time format
	
	//doesn't work yet
	var presenter = document.getElementsByName("7.16.0.0.0.0.2.7.0.0.1.4.3.1.5.5.0.1.3.1.5.0.0.1.16.21.21.1.0.3.3.0.1.0.5.0.0.0.5.1.1.1.0.1.3.0.1.0.1.3.1").value
	
	//clean up spaces
	eventName = eventName.replace(" ","+");
	clientName = cliantName.replace(" ","+");
	techName = techName.replace(" ","+");	
	presenter = presenter.replace(" ","+");
	
	
	
	//base url
	var url = 'https://docs.google.com/a/carleton.edu/forms/d/1JVcYRIetTJf1lKd6noNayl7zaTXDpbDmJE9g97xtLPY/viewform?entry.787468797';
	
	//assign ticketnumber
	url = url.concat('&entry.1873838456=');
	url = url.concat(tNumber);
	
	//assign event name
	url = url.concat('&entry.636977984=');
	url = url.concat(eventName);
	
	//assign Client name
	url = url.concat('&entry.839914204=);
	url = url.concat(clientName);
	
	//assign tech name
	url = url.concat('&entry.1545601613=');
	url = url.concat(techName);
	
	url = url.concat('&entry.519993405');
	url = url.concat(startTime);
	
	url = url.concat('&entry.129346025');
	url = url.concat(presenter);
	
	//somehow return the url string in a way the reader can copy it.
	prompt("Please copy the URL below and hit OK to close this window",url);
	
	return 0;
	*/
})();
