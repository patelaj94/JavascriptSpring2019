// What we've learned so far: 
	// Variables: String, number
	// Structures: Arrays
	// Program Flow: nothing yet

// Class 3:	
	//Variables: boolean
	//Program Flow: if, else, loop

// operators: ===, >, >=, !==
	// if(2 === 2){
	// 	console.log('Yes');
	// }

	// if(5 > 10){
	// 	console.log('No');
	// }

	// if(5 >= 5){
	// 	console.log('Yes');
	// }

	// if(3 !== 4){
	// 	console.log('Yes')
	// }

// if statement condition
	let state = 'FL';
	let taxPercent = .07
	let cost = 10

	if(state === 'FL'){
		cost = cost + (cost*taxPercent)
	}
	console.log(cost);

// if, else statement condition
	let state = 'FL';
	let taxPercent;
	let cost = 10

	if(state === 'DE'){
		taxPercent = 0;
	}
	else{
		taxPercent = 0.07;
	}
	cost = cost + (cost*taxPercent)
		console.log(cost)

// Class activity - use prompt to take a number input, convert to int.
	// If int is even, print even. IF odd, print odd.
	let userInput = prompt("Enter an integer");
	userInput = parseInt(userInput);
	if(userInput % 2 === 0){
		print('Even');
	}
	else{
		print('Odd');
	}

// for loop - condition
	for(let i=0; i < 4; i++){
		console.log(i);
	}



// Class activity - user prompt to take a number input, convert to int.
	// then using a for loop, print that number that many times
	let userVal = prompt("Enter an integer")
	userVal = parseInt(userVal)
	for(let i=0; i <= userVal; i++){
		console.log(userVal)
	}

// While loop - condition
	let count = 1;
	while(count < 5){
		console.log(count);
		count++;
	}

// Class activity - user prompt to take a number inpt, convert to int. 
	// then using a while loop, print that number that many times
	let userVal1 = prompt("Enter an integer")
	userVal1 = parseInt(userVal1)
	let count = 0;
	while(while count < userVal1){
		console.log(userVal1)
		count++;
	}