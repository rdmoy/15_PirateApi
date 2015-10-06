/*
	Pirate Translation Dictionary

	This should look familiar :)

	We don't want to clutter up app.js, so we're going to create a module.  
	In node, modules are like functions - they have local scope.  Variables we 
	define here are not accessible from other files (e.g. app.js) UNLESS they 
	are put on the "module.exports" property.
*/

module.exports = {};

module.exports.dictionary = {
	"address": "port o' call",
	"admin": "helm",
	"am": "be",
	"an": "a",
	"and": "n'",
	"are": "be",
	"award": "prize",
	"bathroom" : "head",
	"beer": "grog",
	"before": "afore",
	"belief": "creed",
	"between": "betwixt",
	"big": "vast",
	"bill": "coin",
	"bills": "coins",
	"boss": "admiral",
	"bourbon": "rum",
	"box": "barrel",
	"boy": "lad",
	"buddy": "mate",
	"calling": "callin'",
	"cash": "coin",
	"cat": "parrot",
	"cheat": "hornswaggle",
	"comes": "hails",
	"comments": "yer words",
	"cool" : "shipshape",
	"country": "land",
	"dashboard": "shanty",
	"dead": "in Davy Jones's Locker",
	"disconnect": "keelhaul",
	"do": "d'",
	"dog": "parrot",
	"dollar" : "doubloon",
	"dollar": "doubloon",
	"dollars" : "doubloons",
	"dude": "pirate",
	"employee": "crew",
	"everyone" : "all hands",
	"eye": "eye-patch",
	"family": "kin",
	"fee": "debt",
	"female": "wench",
	"females": "wenches",
	"for": "fer",
	"food": "grub",
	"friend": "mate",
	"friend": "shipmate",
	"friends": "crew",
	"fuck" : "shiver me timbers", 
	"gin": "rum",
	"girl": "lass",
	"girls": "lassies",
	"go": "sail",
	"good": "jolly good",
	"grave": "Davy Jones's Locker",
	"group": "maties",
	"gun" : "bluderbuss",
	"hand": "hook",
	"haha": "yo ho",
	"hahaha": "yo ho ho",
	"hahahaha": "yo ho ho ho",
	"happy": "grog-filled",
	"hello" : "ahoy",
	"hello": "ahoy",
	"hey" : "ahoy",
	"hey": "ahoy",
	"hi" : "ahoy",
	"hotel": "fleebag inn",
	"i": "me",
	"i'm": "i be",
	"internet": "series o' tubes",
	"invalid": "sunk",
	"is": "be",
	"island": "isle",
	"isn't": "be not",
	"it's": "'tis",
	"jail": "brig",
	"kill": "keelhaul",
	"king": "king",
	"ladies": "lasses",
	"lady": "lass",
	"lawyer": "scurvy land lubber",
	"left" : "port",
	"leg": "peg",
	"logout": "walk the plank",
	"lol" : "blimey",
	"male": "pirate",
	"man": "pirate",
	"manager": "admiral",
	"money": "doubloons",
	"month": "moon",
	"my" : "me",
	"my": "me",
	"never": "nary",
	"no" : "nay",
	"not": "nay",
	"of": "o'",
	"old": "barnacle-covered",
	"omg" : "shiver me timbers",
	"over": "o'er",
	"page": "parchment",
	"people": "scallywags",
	"person": "scurvy dog",
	"posted": "tacked to the yardarm",
	"president": "king",
	"prison": "brig",
	"quickly": "smartly",
	"really": "verily",
	"relative": "kin",
	"relatives": "kin",
	"religion": "creed",
	"restaurant": "galley",
	"right" : "starboard",
	"rotf" : "rollin' on the decks",
	"say": "cry",
	"seconds": "ticks o' tha clock",
	"shipping": "cargo",
	"shit" : "shiver me timbers", 
	"snack": "grub",
	"small": "puny",
	"soldier": "sailor",
	"sorry": "yarr",
	"spouse": "ball 'n' chain",
	"state": "land",
	"supervisor": "Cap'n",
	"that's": "that be",
	"the": "thar",
	"theif": "swoggler",
	"them": "'em",
	"to": "t'",
	"together": "t'gether",
	"treasure": "booty",
	"vodka": "rum",
	"was": "be",
	"water": "grog",
	"we": "our jolly crew",
	"we're": "we's",
	"whiskey": "rum",
	"whisky": "rum",
	"wine": "grog",
	"with": "wit'",
	"woman": "comely wench",
	"women": "beauties",
	"work": "duty",
	"yah": "aye",
	"yeah": "aye",
	"yes" : "aye",
	"you" : "ye",
	"you've": "ye",
	"your": "yer",
	"yup" : "aye"
};

module.exports.translateWord = function(englishWord){
	englishWordCase = englishWord.toLowerCase();
	if (this.dictionary[englishWordCase] === undefined){
		return englishWord
	}
	else {
		var pirateWord = this.dictionary[englishWordCase]
		return this.applyCase(englishWord, pirateWord)
	}
}
	
module.exports.translate = function(englishString){
	var currentWord = "";
	var pirateString = "";
	for (i=0; i<englishString.length; i++){
		if (!this.isLetter(englishString[i])){
			pirateString += this.translateWord(currentWord) + englishString[i];
			currentWord = "";
		}
		else {
			currentWord += englishString[i];
		}
	}
	if (currentWord !== "") pirateString += this.translateWord(currentWord);
	console.log(pirateString)
	return pirateString
}
module.exports.applyCase = function (wordA, wordB) {
	if (wordA !== wordA.toLowerCase()) {
		var capWord = wordB[0].toUpperCase();
		for (i=1; i<wordB.length; i++){
			capWord += wordB[i];
		}
		return capWord;
	}
	else {return wordB}
}

module.exports.isLetter = function (character) {
	if (character.search(/[a-zA-Z'-]/) === -1) return false;
	return true;
};



