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
 * resetMap()
 */

/////////////////////////////
// startGame(topoPetsGame) //
/////////////////////////////

// Function to start the TopoPets game and get the needed variables

function startGame(topoPetsGame) {
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
		topoPetsGame.player.Name = playerName;
	}

	// Show the player's name
	document.getElementById("player").innerHTML = "<p>" + topoPetsGame.player.Name + "</p>";

	// Show the city name
	document.getElementById("locationName").innerHTML = "<p>" + startingVariables.locationName + "</p>";
	document.getElementById("locationName").style.display = "block";
	document.getElementById("location").style.display = "block";
	
	// Draw the map
	var markers = drawMap(startingVariables);
	startingVariables.markers = markers;
	// Show the map
	document.getElementById("map").style.display = "block";

	// Show the buttons
	document.getElementById("buttons").style.display = "block";

	// Return the starting variables
	topoPetsGame.startingVariables = startingVariables;
	return topoPetsGame;
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

// Function to draw the map

function drawMap(startingVariables) {

	// Draw the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: startingVariables.zoomLevel,
		center: new google.maps.LatLng(startingVariables.lat, startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
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
			"CHARFOIL", 
			"FIRE", // later version FIRE/ SHADOW
			"A small TopoPet with a knife as ear.",
			51.9802742,
			5.6569692, 
			17,
			"red"
		],
		[
			"HAILO", 
			"AIR", // later version LIGHT/ AIR
			"A hail like TopoPet with a halo around it's head.",
			51.9771265,
			5.6480455, 
			14,
			"aqua"
		],
		[
			"LAVACHE",
			"FIRE", 
			"A French fire cow with a fiery barret and a French bread as belt.",
			51.9669056, 
			5.6509072, 
			14,
			"red"
		],
		[
			"MOREEL",
			"WATER", 
			"A fish with a high morale.",
			51.9615314,
			5.6576431, 
			16,
			"blue"
		],
		[
			"MUDDITCH",
			"EARTH", 
			"An earthy TopoPet that likes to hide in the bottom of ditches.",
			51.9698076, 
			5.6650889,
			15,
			"brown"
		],
		[
			"NEMATOAD",
			"WATER",
			"A very small toad, the size of some small earth worms.",
			51.9810459,
			5.6596941, 
			18,
			"blue"
		],
		[
			"PIRAMINI",
			"EARTH", // later version: ANCIENT
			"A TopoPet that resambles a small pyramid.", // There were more in ancient times.
			51.9677729,
			5.6654249, 
			15,
			"brown"
		],
		[
			"PYROSE",
			"FIRE", 
			"A rose whose leafs and thorns are on fire.",
			51.9657325,
			5.690763, 
			16,
			"red"
		],
		[
			"SANDANCE",
			"EARTH",
			"It's a small ball of sand, with some sort of hula hoop around it.",
			51.9535231, 
			5.6637378, 
			16,
			"brown"
		],
		[
			"SHEAL",
			"WATER",
			"A very helpful seal. Be careful with it. No clubs allowed.",
			51.9681386,
			5.6643775, 
			17,
			"blue"
		],
		[
			"VAMPYRE",
			"AIR", // AIR (/FIRE)
			"It's a bat that sometimes catches fire if it flies for a long period.",
			51.9810143, 
			5.6984898, 
			15,
			"brown"
		],
		[
			"WINGDIGO",
			"AIR",
			"A winged wolf, rarely seen by humans. Only seen on specific times.",
			51.9818399,
			5.6723195, 
			14,
			"aqua"
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
		    position: coords, 
		    title: topoPetsName,
		    icon: "images/" + topoPetsType1 + ".png" 
		});

/*
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
 */

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
			document.getElementById(this.title).style.display = "block";
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + "a TopoPet" + "!."; // http://stackoverflow.com/questions/16985867/adding-an-onclick-event-to-google-map-marker
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";

			// Remove the marker
			this.setMap(null);
			markers[topoPetsName] = null;
		});

		// Add the marker to the map
		markers[topoPetsName].setMap(map);
	}

	// Return the markers object
	return markers;
}

////////////////
// resetMap() //
////////////////

// Function to reset the map to Wageningen, zoomLevel 14

function resetMap() {

	var zoomLevel = 14;
	var lat = 51.974151;
	var lon = 5.664084;

	// Draw the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: zoomLevel,
		center: new google.maps.LatLng(lat, lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	// It should remember which TopoPets are already caught and not show those markers
	var markers = createMarkers(map);
}