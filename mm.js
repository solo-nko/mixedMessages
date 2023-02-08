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
	let testArticle = randomSelection(articles);
	let testAdjective = randomSelection(adjectives); //draw random adjective from the deck
	let testNoun = randomSelection(nouns); //draw a random noun from the deck

	if (vowels.includes(testAdjective[0])) //if the adjective drawn starts with a vowel...
	{
		while (testArticle === "a") //..and if the article drawn is "a", draw a new article
		{
			testArticle = randomSelection(articles);
		}
	}
	else if (consonants.includes(testAdjective[0]))
	{
		while (testArticle === "an") //if the adjective pulled starts with a consonant, draw again. 
		{
			testArticle = randomSelection(articles);
		}
	}
	randomSentenceArray.push(testArticle);
	randomSentenceArray.push(testAdjective);

	randomSentenceArray.push(testNoun);

	randomSentenceArray.push(randomSelection(verbs)); //draw random verb from the deck and add it to the sentence
	
	testArticle = randomSelection(articles);
	testAdjective = randomSelection(adjectives); //draw random adjective from the deck
	testNoun = randomSelection(nouns);
	
	while (randomSentenceArray.includes(testAdjective)) //check if the adjective drawn is already present in the sentence. if it is, draw a new one
	{
		testAdjective = randomSelection(adjectives);
	}
	while (randomSentenceArray.includes(testNoun))
	{
		testNoun = randomSelection(nouns);
	}

	if (vowels.includes(testAdjective[0])) //if the adjective drawn starts with a vowel...
	{
		while (testArticle === "a") //..and if the article drawn is "a", draw a new article
		{
			testArticle = randomSelection(articles);
		}
	}
	else if (consonants.includes(testAdjective[0]))
	{
		while (testArticle === "an") //if the adjective pulled starts with a consonant, draw again. 
		{
			testArticle = randomSelection(articles);
		}
	}

	randomSentenceArray.push(testArticle);
	randomSentenceArray.push(testAdjective);
	randomSentenceArray.push(testNoun);
	
	let newSentence = randomSentenceArray.join(" "); //create a string from the array
	newSentence = newSentence.charAt(0).toUpperCase() + newSentence.slice(1) + "."; //capitalize the sentence and add a period
	
	return newSentence;
}

console.log(constructSentence());
