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
const nouns = ["fox", "robot", "goblin", "road", "ape", "eye", "knife", "ogre", "angler"];
const articles = ["the", "a", "an"]; //choose based on vowel/consonant;
const adjective = ["sleepy", "fiery", "calm", "golden"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "b", "w", "x", "w,", "y", "z"]
const vowels = ["a", "e", "i", "o", "u"];

function randomSelection(inputArray)
{
	let chosenIndex = Math.floor(Math.random() * inputArray.length);
	return inputArray[chosenIndex];
}

function constructSentence()
{
	let randomSentenceArray = [];
	randomSentenceArray.push(randomSelection(articles));
	let testWord = randomSelection(nouns);//pull a noun from the deck
	if (randomSentenceArray[0] === "a")
	{
		while (vowels.includes(testWord[0]))//if the noun pulled starts with aiueo, draw again.
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	}
	else if (randomSentenceArray[0] === "an")
	{
		while (consonants.includes(testWord[0]))//if the noun pulled does NOT start with aiueo, draw again.  Currently broken, because I think 
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	} else
	{
		randomSentenceArray.push(testWord);
	}
	return randomSentenceArray.join(" ");
}

console.log(constructSentence());
