/* StartGame.js
 * JavaScript file to arrange the start of the TopoPets game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * startGame()
 * setLatLon()
 * drawMap()
 * createMarkers()
 */

/////////////////
// startGame() //
/////////////////

// Function to start the GeoPets game and get the needed variables

function startGame() {
	// Set the variables
	var locationName = "WAGENINGEN"; // var locationName = """"; for later versions
	var playerName = "";
	var startingVariables = new Object();

	// Create the startingVariables object
	startingVariables.locationName = locationName;
	setLatLon(startingVariables);

	// Get the player's name
	while (playerName.length < 1) {

		// Get the name
		playerName = prompt("What is your name? ", "Mistae");

		// Add the playerName to the startingVariables
		startingVariables.playerName = playerName;
	}

	// Show the player's name
	document.getElementById("player").innerHTML = "<p>" + startingVariables.playerName + "</p>";
	document.getElementById("player").style.display = "block";

	// Show the turn box
	document.getElementById("turn").style.display = "block";

	// Show the city name
	document.getElementById("locationName").innerHTML = "<p>" + startingVariables.locationName + "</p>";
	document.getElementById("locationName").style.display = "block";

	// Show the chat box
	document.getElementById("achievements").style.display = "block";

	// Show the GeoPets Found box
	document.getElementById("topoPetsFound").style.display = "block";
	
	// Draw the map
	var markers = drawMap(startingVariables);
	startingVariables.markers = markers;
	// Show the map
	document.getElementById("map").style.display = "block";

	// Return the starting variables
	return startingVariables;
}


//////////////////////////////////
// setLatLon(startingVariables) //
//////////////////////////////////

// Function to get the coordinates of a city

function setLatLon(startingVariables) {
	// Variable with city properties
	var cityProperties = [
		["City Name", "Latitude", "Longitude", "Zoom Level"],
		["LEIDEN", 52.1583300, 4.4930600, 13],
		["WAGENINGEN", 51.974151, 5.664084, 14]
	];

	
	for (i=0; i<cityProperties.length; i++) {
		if (cityProperties[i][0] == startingVariables.locationName) {
			startingVariables.lat = cityProperties[i][1];
			startingVariables.lon = cityProperties[i][2];
			startingVariables.zoomLevel = cityProperties[i][3];
		}
	}
}


////////////////////////////////
// drawMap(startingVariables) //
////////////////////////////////

// Function to draw the map for the RUF-a-GIS game

function drawMap(startingVariables) {

	// Draw the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: startingVariables.zoomLevel,
		center: new google.maps.LatLng(startingVariables.lat, startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	var markers = createMarkers(map);
	return markers;
}

////////////////////////
// createMarkers(map) //
////////////////////////

function createMarkers(map) {

	// Create an object to store the markers in
	var markers = new Object();
	//var infowindow = null;

	// TopoPets stats and marker coordinates
	var topoPetsStats = [
		[
			"name",
			"type1",
			"description",
			"coordX", 
			"coordY", 
			"zoomLevel",
			"infoWindowTextColor"
		],
		[
			"LAVACHE",
			"FIRE", 
			"A French fire cow.",
			51.9669056, 
			5.6509072, 
			14,
			"red"
		],
		[
			"NEMATOAD",
			"WATER",
			"A very small toad.",
			51.9810459,
			5.6596941, 
			18,
			"blue"
		]
	];

	// Create the TopoPets markers and store them in the markers object
	for (i = 1; i < topoPetsStats.length; i++) {
		var topoPetsName = topoPetsStats[i][0];
		var topoPetsType1 = topoPetsStats[i][1];
		var topoPetsDescription = topoPetsStats[i][2];
		var topoPetsCoordX = topoPetsStats[i][3];
		var topoPetsCoordY = topoPetsStats[i][4];
		var topoPetsZoomLevel = topoPetsStats[i][5];
		var topoPetsInfowindowColour = topoPetsStats[i][6];

		// Create the TopoPet marker
		var coords = new google.maps.LatLng(topoPetsCoordX, topoPetsCoordY);
		markers[topoPetsName] = new google.maps.Marker({
		    position: coords, // works properly
		    title: topoPetsName, // works properly
		    icon: "images/" + topoPetsType1 + ".png" // works properly
		});

		// Add infowindow when hovering over an marker		
		// Create content for infowindow
		var content = "<font color=" + topoPetsInfowindowColour + "><h1>" + topoPetsName + "</h1>" + topoPetsDescription + "</font>";
		// Create infowindow
		var infowindow = new google.maps.InfoWindow();
		//// Multiple markers
		////// http://you.arenot.me/2010/06/29/google-maps-api-v3-0-multiple-markers-multiple-infowindows/
		////// http://stackoverflow.com/questions/11106671/google-maps-api-multiple-markers-with-infowindows
		markers[topoPetsName].addListener("mouseover", function(){
			infowindow.setContent(content);
			infowindow.open(map, this);
		});

/*
        markers[topoPetsName].addListener("mouseover", (function(markers[topoPetsName],content,infowindow){ 
       		return function() {
            	infowindow.setContent(content);
            	infowindow.open(map, markers[topoPetsName]);
            };
        })(markers[topoPetsName]),content,infowindow); 
*/

		// Remove marker when clicked on marker and add TopoPet to #topoPetsFound
		google.maps.event.addListener(markers[topoPetsName], "click", function(){
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block"; // works properly

			// Remove the marker
			this.setMap(null); // works properly
			markers[topoPetsName] = null; // works properly
		});

		// Add the marker to the map
		markers[topoPetsName].setMap(map);
	}

	// Return the markers object
	return markers;
}