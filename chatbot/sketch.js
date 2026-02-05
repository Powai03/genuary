let bot = new RiveScript();
let submitBtn, userInput, outputDiv;

function preload() {
  bot.loadFile("dialogue.rive").then(botReady).catch(botError);
}

function setup() {
  noCanvas(); 
  outputDiv = select('#output-div');
  userInput = select('#user-input');
  submitBtn = select('#send-btn');
  
  submitBtn.mousePressed(botChat);
  userInput.keyPressed(onEnter);
}

function botReady() {
  console.log("Le bot est prêt !");
  bot.sortReplies(); // Ne touche à rien, c'est cette ligne qui gère l'erreur
}

function botError(err) {
  console.error("Erreur de chargement RiveScript:", err);
}

function onEnter() {
  if (keyCode === ENTER) botChat();
}

function botChat() {
  let input = userInput.value();
  if (input !== "") {
    // AFFICHER USER
    createP(input).class('userConvo').parent(outputDiv);
    
    // ICI : ON FORCE LE TRI UNE DERNIÈRE FOIS SI JAMAIS IL A RATÉ
    bot.sortReplies(); 

    bot.reply("local-user", input).then(function(reply) {
      createP(reply).class('botConvo').parent(outputDiv);
      outputDiv.elt.scrollTop = outputDiv.elt.scrollHeight;
    });
    
    userInput.value(''); 
  }
}