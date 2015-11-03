(function(){
	/*
	TODO
	-check URL to make sure script only runs on webhelpdesk and only on closed tickets
	-error handling (maybe give option to manually enter in information?)
		-will have to load in a popup or a side bar so they can copy and paste.
	-automatically attaching to clipboard.
	*/
	
	//Grab all of the different variables
	
	var tNumber = document.getElementById("clip_button_7_16_0_0_0_0_2_7_0_0_1_4_3_1_5_5_0_1_3_1_5_0_0_1_16_1_1_12_10").firstElementChild.text;
	console.log(tNumber);
	var eventName = document.getElementById("subject").value;
	console.log(eventName);
	var clientName = (document.getElementsByClassName("mailToLink")[0].firstElementChild).innerHTML.slice(14,-19); //this needs to be tested
	console.log(clientName);
	var techName = document.getElementById("assignedTechPopup")[Number(document.getElementById("assignedTechPopup").value)+1].text;
	console.log(techName);	
	var presenter = document.getElementsByName("7.16.0.0.0.0.2.7.0.0.1.4.3.1.5.5.0.1.3.1.5.0.0.1.16.21.21.1.0.3.3.0.1.0.5.0.0.0.5.1.1.1.0.1.3.0.1.0.1.3.1").value;
	console.log(presenter);	
	//dates
	var startDatePart = document.getElementById("date_7_16_0_0_0_0_2_7_0_0_1_4_3_1_5_5_0_1_3_1_5_0_0_1_16_21_31_3_4_3_29_0_3").value;
	//year/month/day
	startDatePart= startDatePart.split('/')[2]=20+startDatePart.split('/')[2]+"/"+startDatePart.split('/')[0]+'/'+startDatePart.split('/')[1];
	var startHourPart = (document.getElementsByName("7.16.0.0.0.0.2.7.0.0.1.4.3.1.5.5.0.1.3.1.5.0.0.1.16.21.31.3.4.3.29.0.7.0.1.0.0.1.1.0")[0].value)+1;
	var startMinPart = document.getElementsByName("7.16.0.0.0.0.2.7.0.0.1.4.3.1.5.5.0.1.3.1.5.0.0.1.16.21.31.3.4.3.29.0.7.0.5.0.0.1.1.0")[0].value;
	//set to 24 hour time
	if (document.getElementsByName("am_pm_radio_7.16.0.0.0.0.2.7.0.0.1.4.3.1.5.5.0.1.3.1.5.0.0.1.16.21.31.3.4.3.29.0.7")[1].checked){
		startHourPart+=12;
		startHourPart=startHourPart.toString();
	}
	else{
		startHourPart=startHourPart.toString();
	}
	//Date in Year-month-day+24hour time format
	var date = startDatePart + startHourPart + startMinPart;
	console.log(date);	
	

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
	url = url.concat('&entry.839914204=');
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
})();
