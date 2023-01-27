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

const verbs = ["eats", "strikes", "wipes", "pushes", "pulls", "drops", "throws"];
const nouns = ["fox", "robot", "goblin", "road", "ape", "eye", "knife", "ogre", "angler", "ostrich", "imp"];
const articles = ["the", "a", "an"]; //choose based on vowel/consonant;
const adjectives = ["sleepy", "fiery", "calm", "golden"];
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
	randomSentenceArray.push(randomSelection(articles)); //draw random article from the deck and add it to the sentence
	let testAdjective = randomSelection(adjectives); //draw random adjective from the deck
	randomSentenceArray.push(testAdjective); //add drawn adjective to the sentence
	let testWord = randomSelection(nouns); //draw a random noun from the deck

	if (randomSentenceArray[0] === "a")
	{
		while (vowels.includes(testWord[0])) //if the noun pulled starts with aiueo, draw again.
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	}
	else if (randomSentenceArray[0] === "an")
	{
		while (consonants.includes(testWord[0])) //if the noun pulled does NOT start with aiueo, draw again.  Currently broken, because I think 
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	} else
	{
		randomSentenceArray.push(testWord);
	}

	randomSentenceArray.push(randomSelection(verbs)); //draw random verb from the deck and add it to the sentence
	randomSentenceArray.push(randomSelection(articles)); //draw random article from the deck and add it to the sentence
	
	testAdjective = randomSelection(adjectives); //draw random adjective from the deck
	while (randomSentenceArray.includes(adjectives)) //check if the adjective drawn is already present in the sentence. if it is, draw a new one
	{
		testWord = randomSelection(adjectives);
	}
	randomSentenceArray.push(testAdjective); //add adjective to the sentence

	testWord = randomSelection(nouns); //draw random noun from the deck
	while (randomSentenceArray.includes(testWord)) //check if the noun drawn is already present in the sentence.  if it is, draw a new one
	{
		testWord = randomSelection(nouns);
	}

	if (randomSentenceArray[4] === "a")
	{
		while (vowels.includes(testWord[0])) //if the noun pulled starts with aiueo, draw again.
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	}
	else if (randomSentenceArray[4] === "an")
	{
		while (consonants.includes(testWord[0])) //if the noun pulled does NOT start with aiueo, draw again.  Currently broken, because I think 
		{
			testWord = randomSelection(nouns);
		}
		randomSentenceArray.push(testWord);
	} else
	{
		randomSentenceArray.push(testWord);
	}
	
	let newSentence = randomSentenceArray.join(" ");
	newSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + ".";
	return newSentence;
}

console.log(constructSentence());
