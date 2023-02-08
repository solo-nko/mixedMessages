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

const verbs = ["eats", "strikes", "wipes", "pushes", "pulls", "drops", "throws", "sends", "spins", "limits", "studies", "uses", "observes", "underestimates"];
const nouns = ["fox", "robot", "goblin", "road", "ape", "eye", "knife", "ogre", "angler", "ostrich", "imp", "king", "queen", "prince", "princess", "frog"];
const articles = ["the", "a", "an"]; //choose based on vowel/consonant;
const adjectives = ["sleepy", "fiery", "calm", "golden", "red", "wily", "heavy", "quick", "easy", "old", "shy", "aloof", "amused", "energetic", "angelic", "eccentric", "austere"];
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
	let testArticle = randomSelection(articles); //draw a random article from the array
	let testAdjective = randomSelection(adjectives); //draw random adjective from the array
	let testNoun = randomSelection(nouns); //draw a random noun from the array

	if (vowels.includes(testAdjective[0])) //if the adjective drawn starts with a vowel...
	{
		while (testArticle === "a") //..and if the article drawn is "a", draw a new article, because we do not use "a" with vowels
		{
			testArticle = randomSelection(articles);
		}
	}
	else if (consonants.includes(testAdjective[0])) //or, if the adjective drawn starts with a consonant...
	{
		while (testArticle === "an") //...and if the article drawn is "an", draw a new article, because we do not use "an" with consonants.
		{
			testArticle = randomSelection(articles);
		}
	}

	//after getting the appropriate words sorted, we push them to the array in order
	randomSentenceArray.push(testArticle);
	randomSentenceArray.push(testAdjective);
	randomSentenceArray.push(testNoun);

	//second part of the sentence
	randomSentenceArray.push(randomSelection(verbs)); //draw random verb from the deck and add it to the sentence
	
	testArticle = randomSelection(articles);
	
	while (randomSentenceArray.includes(testAdjective)) //replace the currently drawn adjective with a new one
	{
		testAdjective = randomSelection(adjectives);
	}
	while (randomSentenceArray.includes(testNoun)) //replace the currently drawn noun with a new one
	{
		testNoun = randomSelection(nouns);
	}

	//repeat tests from the first part to ensure grammatical accuracy
	if (vowels.includes(testAdjective[0])) 
	{
		while (testArticle === "a")
		{
			testArticle = randomSelection(articles);
		}
	}
	else if (consonants.includes(testAdjective[0]))
	{
		while (testArticle === "an")
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
