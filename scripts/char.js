const charInfo = [
	[
		"Compost Heap",
		"Food Taster",
		"Compost Heap's strengths are in the creation of delicious and nutritious foodstuffs to heal the group.  Of course, he always keeps a little bit for himself.",
		"compostHeap.gif",
		60,
		80,
		50
	],
	["Felix", "Basket Weaver", "Weaving is a dangerous profession, as Felix knows. Trained from a young age, he can take any wooden object and turn it into a deadly basket.", "felix.gif", 75, 50, 60],["Robopig", "Dentist", "Finding treasure is a lot like pulling teeth, and it turns out that plyers, drills, and mirrors on little sticks are great out on the field.  Robopig is the innovator of the group, and she always has some item for the task at hand.", "robopig.gif", 70, 40, 70],["Slimy", "Proctologist", "Silmy can be a real pain in the nether regions to her enemies, and is most efficient wielding heated iron rods. She is also the brains of the group, easily solving any puzzle.", "slimeMan.gif", 40, 70, 75],["Sock Monster", "Dragon Slayer", "Easily the strongest of the group, Sock Monster can wield any type of weapon, but is most deadly with anything made from cotton.  Dragons beware!", "sockMonster.gif", 90, 30, 75]
];

//call to add a character when the page first loads
updateInfo(0);

function updateInfo(characterNumber){
	//the variable characterNumber is sent when the function is called
	//it will be a number between 0 and 4, telling us which position in the array
	//to get the character's information from

	//because we're now changing this dynamically, we need to remove the old information
	document.querySelector("#cInfo1").innerHTML = "";

	//add the initial character value (when the page first loads)
	//using document.createElement
	const charName = document.createElement('h3');

	charName.id = "cName";

	//add the character's name from the array (use the first character set)
	//from the array, get the first value (0), which is also an array
	//...and get the first value from that (0), which is the character's name
	charName.textContent = charInfo[characterNumber][0];

	//get the cInfo1 div so we can add the charName element to the page
	document.querySelector("#cInfo1").appendChild(charName);

	const charJob = document.createElement('h3');
	charJob.id = "cJob";
	charJob.textContent = charInfo[characterNumber][1];
	document.querySelector("#cInfo1").appendChild(charJob);

	//use HTML templates and the template literal method to add an image
	const imageHolder = document.querySelector("#picholder");

	//put the image information into a variable to add it dynamically
	const charImage = charInfo[characterNumber][3];

	//create the HTMl as a template, using backticks `
	//use the ${} placeholder method to add the information from the array
	const htmlTemplate = `<img src="images/${charImage}" alt="The character's picture">`;

	//add the template to the page using innerHTML
	imageHolder.innerHTML = htmlTemplate;
}

//make the button clickable
//use a loop to go through all five buttons
const buttons = document.querySelectorAll(".cButton");

for(let i=0; i<buttons.length; i++){
	buttons[i].addEventListener("click", changeCharacter);
}

function changeCharacter(){
	//first, remove "activated" from the previously activated button
	document.querySelector(".activated").classList.remove("activated");
	// then, make this button "activated" (by adding the class activated)
	this.classList.add("activated");

	//figure out which number this child is, so we can apply the information
	//about the appropriate character
	let allChildren = this.parentNode.children;
	
	//because allChildren is not a "true" array, but a collection of HTML elements
	//we have to convert it to a true array first
	allChildren = Array.from(allChildren);

	//use indexOf to find out what position this element is
	const pos = allChildren.indexOf(this);
	
	//call a function to update the information
	//send it the element's current position (which button we clicked on)
	//we'll use that position to get the correct character from the array
	updateInfo(pos);
}