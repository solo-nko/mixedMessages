// The Mixed Messages project will function as a random message generator.  It is capable of randomly drawing from several arrays of words and constructing a grammatically correct English sentence.  It uses nouns, verbs, articles, and adjectives, and avoids repeating any one word (except for articles).

/* 

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

*/

//Next task: Presently the program chooses words based on the article, when in reality it's the reverse: we choose the appropriate article based on the words we want to use.  Alter the program to follow this logic.

const verbs = ["eats", "strikes", "wipes", "pushes", "pulls", "drops", "throws", "sends", "spins"];
const nouns = ["fox", "robot", "goblin", "road", "ape", "eye", "knife", "ogre", "angler", "ostrich", "imp", "king"];
const articles = ["the", "a", "an"]; //choose based on vowel/consonant;
const adjectives = ["sleepy", "fiery", "calm", "golden", "red", "wily", "heavy", "quick", "easy", "old", "shy", "aloof"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
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
	let testNoun = randomSelection(nouns); //draw a random noun from the deck

	if (randomSentenceArray[0] === "a")
	{
		while (vowels.includes(testAdjective[0])) //if the adjective pulled starts with a vowel, draw again.
		{
			testAdjective = randomSelection(adjectives);
		}
		randomSentenceArray.push(testAdjective);
	}
	else if (randomSentenceArray[0] === "an")
	{
		while (consonants.includes(testAdjective[0])) //if the adjective pulled starts with a consonant, draw again. 
		{
			testAdjective = randomSelection(adjectives);
		}
		randomSentenceArray.push(testAdjective);
	} else
	{
		randomSentenceArray.push(testAdjective);
	}
	randomSentenceArray.push(testNoun);

	randomSentenceArray.push(randomSelection(verbs)); //draw random verb from the deck and add it to the sentence
	randomSentenceArray.push(randomSelection(articles)); //draw random article from the deck and add it to the sentence
	
	testAdjective = randomSelection(adjectives); //draw random adjective from the deck
	while (randomSentenceArray.includes(testAdjective)) //check if the adjective drawn is already present in the sentence. if it is, draw a new one
	{
		testAdjective = randomSelection(adjectives);
	}

	if (randomSentenceArray[4] === "a")
	{
		while (vowels.includes(testAdjective[0])) //if the adjective pulled starts with a vowel, draw again.
		{
			testAdjective = randomSelection(adjectives);
		}
		randomSentenceArray.push(testAdjective);
	}
	else if (randomSentenceArray[4] === "an")
	{
		while (consonants.includes(testAdjective[0])) //if the adjective pulled starts with a consonant, draw again.
		{
			testAdjective = randomSelection(adjectives);
		}
		randomSentenceArray.push(testAdjective);
	} else
	{
		randomSentenceArray.push(testAdjective);
	}
	
	testNoun = randomSelection(nouns); //draw random noun from the deck
	while (randomSentenceArray.includes(testNoun)) //check if the noun drawn is already present in the sentence.  if it is, draw a new one
	{
		testNoun = randomSelection(nouns);
	}
	randomSentenceArray.push(testNoun);
	
	let newSentence = randomSentenceArray.join(" "); //create a string from the array
	newSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + "."; //capitalize the sentence and add a period
	
	return newSentence;
}

console.log(constructSentence());
