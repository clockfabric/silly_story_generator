let radioUS = document.querySelector("#country_us");
let radioUK = document.querySelector("#country_uk");
let randomStory = document.querySelector(".random_story");
let storyContainer = document.querySelector(".story_container");
let customName = document.querySelector("#custom_name");

let storyText =
	"It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let xText = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let yText = ["The Soup Kitchen", "Disneyland", "The White House"];
let zText = [
	"spontaneously combusted",
	"melted into a puddle on the sidewalk",
	"turned into a slug and crawled away"
];

function randomNumberGenerator() {
	return (Math.floor(Math.random() * 10) + 1) % 3;
}

randomStory.addEventListener("click", () => {
	let xInsert = xText[randomNumberGenerator()];
	if (!(customName.value === "")) {
		xInsert = customName.value;
	}
	let randomText = storyText
		.replace(":insertx:", xInsert)
		.replace(":inserty:", yText[randomNumberGenerator()])
		.replace(":insertz:", zText[randomNumberGenerator()])
		.replace(":insertx:", xInsert);
	if (radioUS.checked) {
		randomText = randomText
			.replace("fahrenheit", "celsius")
			.replace("pounds", "kilos")
			.replace("94", "34")
			.replace("300", "136");
	}
	storyContainer.innerText = randomText;
});
