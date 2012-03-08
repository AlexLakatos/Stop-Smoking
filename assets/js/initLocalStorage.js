var storage = window.localStorage;
var firstDate = new Date();
var no = [
  "Your awesomenicity is unparalleled",
  "You're like a shining beacon of hope",
  "You Rock",
  "You make the plain magnificent",
  "You make the ordinary extraordinary",
  "You make the dull shiny",
  "You make my heart sing",
  "You bring me much joy",
  "You bring me much happiness",
  "You bring light to a dark world",
  "You are my sunshine, my only sunshine, you make me happy, when skies are gray",
  "Who's the best? YOU!",
  "The world is better because you're in it!",
  "Rock on with your bad self!",
  "Can't nobody do it like you, baby!",
  "I got a little song for you: http://www.youtube.com/watch?v=04854XqcfCY",
  "Kick ass",
  "Man, you are better than I thought",
  "Unbelievable, another day",
  "This was a tough one- good job",
  "I am proud of you",
  "Buy yourself something pretty, you did good",
  "And you thought you coundn't do it",
  "You make dreams happen",
  "Is it me, or are you more attractive today",
  "You are so very sexy",
  "You are killing it",
  "Winning!",
  "High five, baby!",
  "Good job",
  "You are exceptional in every way",
  "Nice shoes",
  "God dammit you are awesome",
  "Seriously, you are one step closer to being perfect",
  "Non-smokers get more play",
  "If I could fist bump you I would",
  "Way to go, buddy.",
  "Every time you succeed, an angel gets its wings.",
  "Congratulations on a small triumph.",
  "Every little success makes you a better person.",
  "Other people wish they could be you.",
  "You're pretty on the inside.",
  "People can only hope to be half as cool as you.",
  "Welcome to the cool kids club.",
  "All of your friends are impressed by you.",
  "Damnit, people like you!",
  "I bask in your glory.",
  "If everyone were .01% as great as you, the world would be grand!",
  "With resolve like that, you should run for president.",
  "I heard people talking about you, they're so jealous.",
  "All the kids want to be just like you.",
  "I wrote you a song for being awesome. But I'm undeserving of playing it for you.",
  "That person you've been eyeing? They totally want you now that you don't smell discusting.",
  "If you were a booger, I'd pick you first.",
  "Hang in there: only awesome people win.",
  "Bro, that was radical.",
  "That was the least shitty thing anyone has done all day.",
  "It's not just your hair, eyes and body that make everyone want you. It's your unshakable resolve.",
  "Your tenacity is stunning.",
  "You kicked ass today!",
  "You are amazing!",
  "You can do this!",
  "I tell you, I just cannot get enough of your greatness.",
  "You are stunning and magical",
  "You are really making it happen",
  "Have a great day! You deserve it",
  "You are the master of you addictions",
  "And you thought you couldn't do it...",
  "How great are you!",
  "I just wanted to say that I love you, it's wierd because I am a phone application, but you know you love me too!",
  "Look at the days rack up!",
  "Goddamn you are hot!",
  "You are proving them wrong",
  "Sweet success, how does it feel?",
  "Jesus can you even imagine how terrible you used to smell",
  "Great job!",
  "You are so very special",
  "If only everything was this easy",
  "Just think of what else you could do",
  "May todays success be the beginning of tomorrows achievements. You did good today!",
  "Well done, pat yourself on the back.",
  "Do you come here often? Oh sorry I forgot about my job, I was distracted by your gourgous face- Congrats on not smoking, but if its not too forward can we do something later?",
  "I am excited for you today, good things are going to happen",
  "Your self-control is astounding"
];
var yes = [
  "You're Mother cries herself to sleep at night for having brought this kind of failure into the world.", 
  "No one loves a failure", 
  "I hope someone kicks you in the clam for smoking that...", 
  "Were your parents were brother and sister, why can't you do this?", 
  "How does it feel to be a total failure?", 
  "Loser", 
  "You are a FAILURE. Please Die. Love, the world.", 
  "You are going to die alone.", 
  "Remember when you were awesome? Yea, neither do we.", 
  "Idiot.", 
  "Do you fuck up everything, or just this?", 
  "You're what the French call 'Les Incompetents'", 
  "Loser.", 
  "You arent even worthy of an insult.", 
  "#1 way to become a total fuck up: Be born you.", 
  "I'm guessing you are a virgin.  I'm also guessing youre going to stay that way forever.", 
  "You are the best case for abortion", 
  "Asshole", 
  "Asshat", 
  "Maybe if your parents had beat you more you wouldn't be such a fuck up.", 
  "Your friends talk about you behind your back", 
  "It's hard to imagine, but you've turned out to be a bigger disappointment than everyone thought", 
  "Get your shit together, asshole", 
  "You're dead inside", 
  "Good luck with cancer", 
  "See you in hell", 
  "Why do you suck so hard", 
  "Your life = FAIL", 
  "You disgust me, most others too", 
  "Your existence makes everyone sick", 
  "No one loves you, crapbag", 
  "If predictability and disapointment had a child, you'd be it.", 
  "That last cigarette just killed a kitten", 
  "Everytime you smoke an angel dies of lung cancer- dick", 
  "Pull your shit together", 
  "I cannot believe what an endless failure you are", 
  "Really, a fucking cigarette... again.  Loser", 
  "You have the will power of a... well, I don't even know, you suck", 
  "Infinate fail", 
  "Cigarettes = no stamina in bed", 
  "Punk rock is dead and so is James Dean, you are next", 
  "Every puff gets you a little closer to hell", 
  "Do you remember when you had dreams?", 
  "This is an endless cycle of bullshit", 
  "Man, seriously.. did you even try to quit today?", 
  "How many failures can you stand?", 
  "It's just a little nicotine, not heroin.  Get a real addiction", 
  "You are pathetic", 
  "Jesus, how much did that pack cost?", 
  "How mad are you at yourself?", 
  "Put the cigarettes down, dumbass", 
  "P-A-T-H-E-T-I-C", 
  "Try again, asshole", 
  "Try to quit again tomorrow, maybe you can get something right", 
  "Someone is judging you right now, believe me", 
  "Have you though about how pathetic this is?", 
  "Is this suicide on the installment plan?", 
  "Have you ever accomplished anything?", 
  "Why is this so fucking hard?", 
  "Here's the thing, if you don't have a cigarette it's called quitting", 
  "Allow me to define quitting, incase you are too stupid to get it.  Quitting: the act of not doing something", 
  "It might be more effective to shove the next cigarette up your ass instead of smoking it.", 
  "Maybe you can start something instead of quitting, try growing balls", 
  "Why don't you throw the pack you just bought away.", 
  "Yes, everyone can smell that you are lying", 
  "Everytime you want a cigarette just take $7.00 out of your wallet and light it on fire", 
  "Your light cigarettes are giving you 'light' cancer", 
  "No worries, cancer cures smoking", 
  "Sure, it's all under control.  Smells like it", 
  "Why do you insist on ruining your life?", 
  "Carve another notch on the failure tree", 
  "Smoke some ambition", 
  "Too bad you cannot smoke failure", 
  "Try again douchbag", 
  "Seriously do we need to have a talk about 'peer pressure' you are a grown up, who fucking cares what your freinds are doing", 
  "Epic Fail Asshole, look at your days resetting to fail", 
  "Try sleeping through a day to get a head start on quitting", 
  "Don't worry no one thought you could do it anyway- wouldn't want to prove anything", 
  "hmmm.... I am out of things to describe your stupidity", 
  "Can you believe how little will power you have?", 
  "I little advise: Try quitting asshole",
  "Jack ass, If you need to waste your money so bad send it here: http://www.longhopes.org/",
  "Great - now you'll die sooner; can you hear the rest of us rejoicing?",
  "'The greatest accomplishment is not in never falling, but in rising again after you fall.' Vince Lombardi"
];


function init() {
  if (storage.length === 0) {
    storage.setItem('days', 0);
    storage.setItem('day', firstDate.getDate());
    storage.setItem('month', firstDate.getMonth());
    storage.setItem('year', firstDate.getFullYear());
	storage.setItem('lastDate', firstDate);
	storage.setItem('firstRun', true);
	storage.setItem('noIndex', 0);
	storage.setItem('yesIndex', 0);
	storage.setItem('no', JSON.stringify(no));
	storage.setItem('yes', JSON.stringify(yes));
  }
}

Array.prototype.shuffle = function() {
  var s = [];
  while (this.length) s.push(this.splice(Math.random() * this.length, 1));
  while (s.length) this.push(s.pop());
  return this;
}

function increaseDays(i) {
  storage.setItem('days', parseInt(storage.getItem('days')) + i);
}

function getCurrentIndex(flag) {
  return parseInt(storage.getItem(flag + 'Index')) - 1;
}

function increaseCurrentIndex(flag) {
  if (parseInt(storage.getItem(flag + 'Index')) >= 86) randomizeMessages(flag);
  storage.setItem(flag + 'Index', parseInt(storage.getItem(flag + 'Index')) + 1);
}

function randomizeMessages(flag) {
  storage.setItem(flag, JSON.stringify(JSON.parse(storage.getItem(flag)).shuffle()));
}

function getDays() {
  return storage.getItem('days');
}

function resetDays() {
  storage.setItem('days', 0);
}

function addDays(i) {
  storage.setItem('days', parseInt(storage.getItem('days')) + parseInt(i));
  populateDays('options');
}

function goBack() {
  history.back();
  populateDays("");
  populateDays("no");
  populateDays("yes");
  populateDays("options");
}

function validateOptions(i) {
  if (!isNaN(parseInt(i))) addDays(i);
}

init();
