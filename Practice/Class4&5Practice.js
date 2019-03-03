// Write a function that takes in two numbers and returns the greater of the two
	function greaterNum(num1, num2){
		if(num1 > num2){
			return num1
		}
		return num2
	}

	let output = greaterNum(3,5)
	let output2 = greaterNum(8,4)
	console.log(output, output2)

// Create an object BasketballPlayer with 5 variables in the object:
	// name, position(ex: point guard), pointsPerGame(ex:28.5), assistsPerGame(ex:7.6),
	// reboundsPerGame(ex:5.5)
	// 1. Print this object using console log
	// 2. Create two more basketball players and convert the three objects to an array
	// of basketball players
	// 3. print each player's name and points per game using console.log
	let basketballPlayer = {
		name: "Lebron James",
		position: "Small Forward",
		pointsPerGame: "28.2",
		assistsPerGame: "8.1",
		reboundsPerGame: "7.5"
	}
  	let basketballPlayer1 = {
     	name: "Shaquille O'Neal",
		position: "Center",
		pointsPerGame: "28.5",
		assistsPerGame: "4.3",
		reboundsPerGame: "9.8"
	}
  	let basketballPlayer2 = {
		name: "Michael Jordan",
	    position: "Shooting Guard",
    	pointsPerGame: "30.5",
    	assistsPerGame: "6.1",
    	reboundsPerGame: "6.5"
	}
	console.log(basketballPlayer)
	let arrayOfPlayers = [basketballPlayer, basketballPlayer1,basketballPlayer2]
	console.log(arrayOfPlayers2.length)
	for(let i=0; i < arrayOfPlayers.length; i++){
		console.log(arrayOfPlayers[i].name, arrayOfPlayers[i].pointsPerGame)
	}
// Make an array of 5 objects with (State, City, and population)
	// Create a function that will take that array of objects and
	// Loop through each object and print each State's capital which has a
	// population greater than 3 million. 
	// You can make up the populations or Google and keep them accurate. Up to you.
	let arrayObjects = [
		{
			state: "New York",
			city: "New York City",
			population: 8550000
		},
		{
			state: "California",
			city: "Los Angeles",
			population: 3970000
		},
		{
			state: "Illinois",
			city: "Chicago",
			population: 2720000
		},
		{
			state: "Texas",
			city: "Houston",
			population: 2296000
		},
		{
			state: "Pennsylvania",
			city: "Philadelphia",
			population: 1560000
		}
	]
	for(let i=0; i < arrayObjects.length; i++){
		if(arrayObjects[i].population > 3000000){
			console.log(arrayObjects[i].city, arrayObjects[i].population)
		}
	}

