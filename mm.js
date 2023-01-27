//The Mixed Messages project will function as a random message generator.
/* We'll try this by studying sentence structure.

English sentence structure:
Subject + verb

Components:
Verbs
Nouns
	Singular
	Plural
Article
	Singular
	Plural
Adjectives

Build arrays for each of these?
Program would pick at random from each array

*/

const verbs = ["eats", "strikes", "wipes"];
const nouns = ["fox", "robot", "goblin", "road"];
const articles = ["the", "a","an"]; //choose based on vowel/consonant;
const adjective = ["sleepy", "fiery", "calm", "golden"];

let randomSentence = [];

function randomSelection(inputArray)
{
	let chosenIndex = Math.floor(Math.random() * inputArray.length-1);
	return inputArray[chosenIndex];
}

function constructSentence()
{
	randomSentence.push(randomSelection(articles));
		if (randomSentence[0] === "a")
		{
			
		}
		else if (randomSentence[0] === "an")
		{

		}
}    
