(function() {
    //Grab all of the different variables

    //ticket number
    try{
    	var status = (document.querySelector("#StatusPanelDiv > table > tbody > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) >div > select")[document.querySelector("#StatusPanelDiv > table > tbody > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) >div > select").value].text);
    	if (!(status=="Resolved"||status == "Closed")){
    		window.alert("Warning! This ticket is not resolved yet. Press ok to continue.")
    	}
    }
    catch(err){
    	console.log("error in status");
    }
    try {
        var tNumber = document.querySelector("#TabPanelUpdateContainer > table > tbody > tr:nth-child(3) > td:nth-child(1) > form > table > tbody > tr > td > table > tbody:nth-child(1) > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(4) > table > tbody > tr > td.monthDisplay > table > tbody > tr:nth-child(1) > td").textContent.trim();
    } catch (err) {
        var tNumber = " ";
    }

    //event Name
    try {
        var eventName = document.getElementById("subject").value;
        eventName = eventName.trim()
    } catch (err) {
        var eventName = " ";
    }

    //client Name
    try {
        var clientName = (document.getElementsByClassName("mailToLink")[0].firstElementChild).textContent.trim();
    } catch (err) {
        var clientName = " ";
    }

    //tech
    try {
        var techName = document.getElementById("assignedTechPopup")[Number(document.getElementById("assignedTechPopup").value) + 1].text;
        techName = techName.replace("[C]", "").trim();
        techName = techName.replace("[V]", "").trim();
    } catch (err) {
        var techName = " ";
    }
    //presenter
    try {
        var presenter = document.querySelector('#CustomFieldsPanelDiv > table > tbody > tr:nth-child(6) > td.dataStandard > table > tbody > tr > td:nth-child(1) > input[type="text"]').value;
    } catch (err) {
        var presenter = "";
    }


    //dates
    try {
        var startDatePart = document.querySelector("#CustomFieldsPanelDiv > table > tbody > tr:nth-child(2) > td.dataStandard > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(1) > div > table > tbody > tr > td").firstChild.value
            //year/month/day
        startDatePart = startDatePart.split('/')[2] = 20 + startDatePart.split('/')[2] + "-" + startDatePart.split('/')[0] + '-' + startDatePart.split('/')[1];
        //keep hour as int right now to help with AM/PM selection later
        var startHourPart = parseInt(document.querySelector("#CustomFieldsPanelDiv > table > tbody > tr:nth-child(2) > td.dataStandard > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(3) > table > tbody > tr > td:nth-child(1) > select").value) + 1;
        var startMinPart = document.querySelector("#CustomFieldsPanelDiv > table > tbody > tr:nth-child(2) > td.dataStandard > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(3) > table > tbody > tr > td:nth-child(3) > select").value;
        //set to 24 hour time
        
        //24 hour time 12 bug fix
        if (startHourPart == 12){
        	startHourPart= 0
        }
        if (document.querySelector('#CustomFieldsPanelDiv > table > tbody > tr:nth-child(2) > td.dataStandard > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td:nth-child(3) > table > tbody > tr > td:nth-child(8) > input[type="radio"]').checked) {
            startHourPart += 12;
            startHourPart = startHourPart.toString();
        } else {
            startHourPart = startHourPart.toString();
        }
        if (startHourPart.length == 1) {
		startHourPart = "0" + startHourPart;
        }
        if (startMinPart.length == 1) {
        startMinPart = "0" + startMinPart;
        }
        //Date in Year-month-day+24hour time format
        var date = startDatePart + "+" + startHourPart + ":" + startMinPart;
    } catch (err) {
        window.alert("Something REALLLLLY messed up");
        var date = " "
    }


    //clean up spaces
    while (eventName.includes(" ")) {
        eventName = eventName.replace(" ", "+");
    }
    while (clientName.includes(" ")) {
        clientName = clientName.replace(" ", "+");
    }
    while (techName.includes(" ")) {
        techName = techName.replace(" ", "+");
        if (techName.includes("&")){
        	techName = techName.replace("&","and");
        }
    }
    while (presenter.includes(" ")) {
        presenter = presenter.replace(" ", "+");
    }

    console.log(tNumber);
    console.log(eventName);
    console.log(clientName);
    console.log(techName);
    console.log(date);
    console.log(presenter);

    //base url
    //var url = 'https://docs.google.com/a/carleton.edu/forms/d/1JVcYRIetTJf1lKd6noNayl7zaTXDpbDmJE9g97xtLPY/viewform?';
    //var url = 'https://docs.google.com/forms/d/1JVcYRIetTJf1lKd6noNayl7zaTXDpbDmJE9g97xtLPY/viewform?entry.787468797';
    var url2 = "https://docs.google.com/a/carleton.edu/forms/d/1JVcYRIetTJf1lKd6noNayl7zaTXDpbDmJE9g97xtLPY/viewform?entry.787468797&entry.1873838456&entry.636977984&entry.839914204&entry.1545601613&entry.519993405&entry.129346025&entry.580111436="
    var test = "";
    test = test.concat(date);
    test = test.concat("$!$");
    test = test.concat(tNumber);
    test = test.concat("$!$");
    test = test.concat(eventName);
    test = test.concat("$!$");
    test = test.concat(clientName);
    test = test.concat("$!$");
    test = test.concat(techName);
    test = test.concat("$!$");
    if (!(presenter == "")) {
        test = test.concat(presenter);
    }
    /*
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
	
    url = url.concat('&entry.519993405=');
    url = url.concat(date);
	

    if (!(presenter=="")){
    	url = url.concat('&entry.129346025=');
    	url = url.concat(presenter);
    }
    //somehow return the url string in a way the reader can copy it.
    */
    prompt("Please copy the URL below and hit OK to close this window", url2.concat(test));

    return url2.concat(test);


})();
