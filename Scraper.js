(function(){
	/*
	TODO
	-check URL to make sure script only runs on webhelpdesk and only on closed tickets
	-error handling (maybe give option to manually enter in information?)
		-will have to load in a popup or a side bar so they can copy and paste.
	-automatically attaching to clipboard.
	*/
	
	//Grab all of the different variables
	
	var tNumber = document.querySelector("#TabPanelUpdateContainer > table > tbody > tr:nth-child(3) > td:nth-child(1) > form > table > tbody > tr > td > table > tbody:nth-child(1) > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(4) > table > tbody > tr > td.monthDisplay > table > tbody > tr:nth-child(1) > td").textContent.trim();
	console.log(tNumber);
	var eventName = document.getElementById("subject").value.trim();
	console.log(eventName);
	var clientName = (document.getElementsByClassName("mailToLink")[0].firstElementChild).textContent.trim();
	console.log(clientName);
	var techName = document.getElementById("assignedTechPopup")[Number(document.getElementById("assignedTechPopup").value)+1].text;
	techName = techName.replace(" [C]","");
	console.log(techName);	
	
	try{
		var presenter = document.querySelector('#CustomFieldsPanelDiv > table > tbody > tr:nth-child(6) > td.dataStandard > table > tbody > tr > td:nth-child(1) > input[type="text"]').value;
	}
	catch(err){
		var presenter ="";
		console.log("there is no presenter");
	}
	
	
	//console.log(presenter);	
	//dates
	var startDatePart = document.querySelector("#StatusPanelDiv > table > tbody > tr:nth-child(3) > td.dataStandard > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr > td:nth-child(1)").firstChild.value
	//year/month/day
	startDatePart= startDatePart.split('/')[2]=20+startDatePart.split('/')[2]+"-"+startDatePart.split('/')[0]+'-'+startDatePart.split('/')[1];
	//keep hour as int right now to help with AM/PM selection later
	var startHourPart = parseInt(document.querySelector("#StatusPanelDiv > table > tbody > tr:nth-child(3) > td.dataStandard > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(1) > select").value)+1;
	var startMinPart = document.querySelector("#StatusPanelDiv > table > tbody > tr:nth-child(3) > td.dataStandard > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(3) > select").value;
	//set to 24 hour time
	if (document.querySelector('#StatusPanelDiv > table > tbody > tr:nth-child(3) > td.dataStandard > table > tbody > tr:nth-child(1) > td:nth-child(4) > table > tbody > tr > td:nth-child(8) > input[type="radio"]').checked){
		startHourPart+=12;
		startHourPart=startHourPart.toString();
	}
	else{
		startHourPart=startHourPart.toString();
	}
	//Date in Year-month-day+24hour time format
	var date = startDatePart +"+"+startHourPart +":"+startMinPart;
	console.log(date);	
	

	//clean up spaces
	eventName = eventName.replace(" ","+");
	eventName = eventName.replace(" ","+");
	clientName = clientName.replace(" ","+");
	techName = techName.replace(" ","+");
	presenter = presenter.replace(" ","+");
	
	
	//base url
	var url = 'https://docs.google.com/a/carleton.edu/forms/d/1JVcYRIetTJf1lKd6noNayl7zaTXDpbDmJE9g97xtLPY/viewform?';
	
	//assign ticketnumber
	url = url.concat('entry.1873838456=');
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
	
	url = url.concat('&entry.519993405=');
	url = url.concat(date);
	

	if (!(presenter=="")){
		url = url.concat('&entry.129346025=');
		url = url.concat(presenter);
	}
	//somehow return the url string in a way the reader can copy it.
	prompt("Please copy the URL below and hit OK to close this window",url);

	return 0;
})();
