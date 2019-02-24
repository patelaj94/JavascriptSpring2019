// Lets recap by writing a function that increases age by 1
	myAge = 24;
	console.log(myAge);
	function increaseAge(age){
    console.log(age)
		return ++age;
	}
	let newAge = increaseAge(myAge);
	console.log(newAge);

// Creating an object
	let person = {
		name: "Arjun",
		age: 24,
		student: false
	};
	// How do i log this persons name?
	// Previously we used variables - personName, personAge, isPersonStudent
	console.log(person.name);

// Passing object to function 
	function changeAge(person){
		person.age += 1;
	}
	let person = {
		name: "Arjun",
		age: 24,
		student: false
	};
	changeAge(person);
	console.log(person.age)
	// Let's write a function that will change the person's student status to opposite
	// what it was

// Array of Objects and printing different values of that array
	let arrayPeople = ['Tom', 'Jerry', 'Bugs', 'Tweety', 'Taz'];

	let arrayPeopleObject = [
		{
			name: "Tom",
			age: 25,
			type: "cat",
			protagonist: false
		},
		{
			name: "Jerry",
			age: 20,
			type: "mouse",
			protagonist: true
		},
		{
			name: "Bugs",
			age: 30,
			type: "Bunny",
			protagonist: true
		},
		{
			name: "Tweety",
			age: 16,
			type: "Bird",
			protagonist: true
		},
		{
			name: "Taz",
			age: 20,
			type: "Tasmanian Devil",
			protagonist: true
		}
	]
	// Print the whole array
	console.log(arrayPeopleObject)
	// Print the Bugs Bunny Object
	console.log(arrayPeopleObject[2]
	// Print the age of Tweety Bird
	console.log(arrayPeopleObject[3].age)

// Let's write a function that will give us the average age of all people in our array
	function averageAge(arrayPeopleObject){
	    let totalAge = 0;
	    let totalPeople = 0;
	    for(let i=0; i < arrayPeopleObject.length; i++){
	      totalAge = totalAge + arrayPeopleObject[i].age;
	      totalPeople += 1;
	    }
	    console.log(totalAge, totalPeople)
	    let averageAge = totalAge/totalPeople
	    return averageAge;
	}

  	let avg = averageAge(arrayPeopleObject)
  	console.log(avg)

