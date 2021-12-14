var partieCheck = document.getElementById("partie");
var partiesCheckText = document.createElement("p");
var statementCheck = document.getElementById("statements");
var statementCheckText = document.createElement("p");

var chosenParty = [];
var partiesData = [];
var statementData = [];

var secularbtn = document.createElement("BUTTON");
secularbtn.innerHTML = "secular";
secularbtn.setAttribute("id", "secularbutton");
document.getElementById("grid-container").appendChild(secularbtn);
secularbtn.style.display = "none";

secularbtn.onclick = function(){
  for(a = 0; a < parties.length; a++) {
    for(b=0;b<parties[a].secular; b++){
        if(parties[a].secular == true){
          parties[a].secular 
        }else {
          partijScore[subjects[c].parties[d].name]+= 0;
        }
    }
    
  }
}

var regularbtn = document.createElement("BUTTON");
regularbtn.innerHTML = "regular";
regularbtn.setAttribute("id", "regularbutton");
document.getElementById("grid-container").appendChild(regularbtn);
regularbtn.style.display = "none";

function ShowPartiesCheck(){

  secularbtn.style.display = "";
  regularbtn.style.display = "";

  var partieForm = document.getElementById('importantParties');
  if(partieForm.innerHTML == "") {
    for (let i = 0; i < parties.length; i++) {
      partieForm.innerHTML += '<label><input type="checkbox" name="' + parties[i].name + '"> ' + parties[i].name + '</label><br>';
    }
  }
}

function ShowStatementsCheck(){
  var statementForm = document.getElementById('importantStatements');
  if(statementForm.innerHTML == "") {
    for (let i = 0; i < subjects.length; i++) {
      statementForm.innerHTML += '<label><input type="checkbox" name="' + subjects[i].title + '"> ' + subjects[i].title + '</label><br>';
      
    }
  }
}

function calculateImportantPoints(){
  var partieForm = document.getElementById('partieForm').elements;
    for (let i = 0; i < partieForm.length; i++) {
      if(partieForm[i].type!="submit") {
        partiesData[partieForm[i].name] = partieForm[i].checked;
      }
    }

    var statementForm = document.getElementById('statementForm').elements;
    for (let i = 0; i < statementForm.length; i++) {
      if(statementForm[i].type!="submit") {
        statementData[statementForm[i].name] = statementForm[i].checked;
      }
    }
    
    for(c = 0; c < anwsers.length; c++) {
    for(d=0;d<subjects[c].parties.length;d++){
        if(statementData[subjects[c].title] == true){
          partijScore[subjects[c].parties[d].name]+= 1;
        }else {
          partijScore[subjects[c].parties[d].name]+= 0;
        }
    }
  }

  console.log(statementData); 
  console.log(partiesData);
}

let partijScore = { 
  "VVD" : 0,
  "CDA" : 0,
  "PVV" : 0,
  "D66" : 0,
  "GroenLinks" : 0,
  "SP" : 0,
  "PvdA" : 0,
  "ChristenUnie" : 0,
  "Partij voor de Dieren" : 0,
  "SGP" : 0,
  "DENK" : 0,
  "Forum voor Democratie" : 0,
  "Lokaal in de Kamer" : 0,
  "OndernemersPartij" : 0,
  "VNL" : 0,
  "Nieuwe Wegen" : 0,
  "De Burger Beweging" : 0,
  "Piratenpartij" : 0,
  "Artikel 1" : 0,
  "Libertarische Partij" : 0,
  "50Plus" : 0,
  "Vrijzinnige Partij" : 0,
  "Libertarische Partij" : 0,
  "Niet Stemmers" : 0,
};

for (let index = 0; index < partijScore.length; index++) {
  console.log(partijScore[index]);
}

var i = 0;
let anwsers = [];

function start(){
  document.getElementById("title").innerHTML = subjects[i].title;
  document.getElementById("statement").innerHTML = subjects[i].statement;
  
  var eens = document.createElement("BUTTON");
  eens.innerHTML = "eens";
  eens.setAttribute("id", "eensbutton");
  document.getElementById("grid-container").appendChild(eens);

  eens.onclick = function(){
    anwsers[i] = "pro";
    console.log(anwsers);
    i++;
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        
        berekenEindResultaat();
        getResults.remove();
        
        ShowPartiesCheck();
        ShowStatementsCheck();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
        partieForm.remove();
        statementForm.remove();
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
  };

  var oneens = document.createElement("BUTTON");
  oneens.innerHTML = "oneens";
  oneens.setAttribute("id", "oneensbutton");
  document.getElementById("grid-container").appendChild(oneens);

  oneens.onclick = function(){
    anwsers[i] = "contra";
    console.log(anwsers);
    i++
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        berekenEindResultaat();
        getResults.remove();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
        partieForm.remove();
        statementForm.remove();
        
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
  };

  var geenKeus = document.createElement("BUTTON");
  geenKeus.innerHTML = "geen keus";
  geenKeus.setAttribute("id", "geenkeusbutton");
  document.getElementById("grid-container").appendChild(geenKeus);

  geenKeus.onclick = function(){
    anwsers[i] = "geen mening";
    console.log(anwsers);
    i++;
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
      berekenEindResultaat();
        getResults.remove();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
        partieForm.remove();
        statementForm.remove();
      }
    }
    else {
      document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
    }
  };

  var overslaan = document.createElement("BUTTON");
  overslaan.innerHTML = "overslaan";
  overslaan.setAttribute("id", "overslaanbutton");
  document.getElementById("grid-container").appendChild(overslaan);

  overslaan.onclick = function(){
    anwsers[i] = "overgeslagen";
    console.log(anwsers);
    i++
    if (i === subjects.length){
      document.getElementById("title").innerHTML = "U bent klaar!";
      document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
      ShowPartiesCheck();
      ShowStatementsCheck();
      eens.remove();
      oneens.remove();
      geenKeus.remove();
      terug.remove();
      overslaan.remove();
      var getResults = document.createElement("BUTTON");
      getResults.innerHTML = "krijg resultaat";
      getResults.setAttribute("id", "getresult");
      document.getElementById("grid-container").appendChild(getResults);
      getResults.onclick = function(){
        getResults.remove();
        berekenEindResultaat();
        document.getElementById("title").innerHTML = "resultaten:";
        document.getElementById("statement").innerHTML = "";
        partieForm.remove();
        statementForm.remove();
      }
    }
    document.getElementById("title").innerHTML = subjects[i].title;
    document.getElementById("statement").innerHTML = subjects[i].statement;
  };

  var terug = document.createElement("BUTTON");
  terug.innerHTML = "terug";
  terug.setAttribute("id", "terugbutton");
  document.getElementById("grid-container").appendChild(terug);
  terug.onclick = function(){
    i--;
    if (i < 0){
      document.getElementById("title").innerHTML = "U gaat 30 vragen beantwoorden";
      document.getElementById("statement").innerHTML = "";
     
      eens.remove(), oneens.remove(), geenKeus.remove(), terug.remove(),  overslaan.remove(), regularbtn.remove(), secularbtn.remove();
      startButton = document.createElement("BUTTON");
      startButton.innerHTML = "start";
      startButton.setAttribute("id", "startbutton");
      document.getElementById("grid-container").appendChild(startButton);
      startButton.onclick = function (){
        i = 0;
        anwsers = [];
        start();
      }
    }
        document.getElementById("title").innerHTML = subjects[i].title;
        document.getElementById("statement").innerHTML = subjects[i].statement;
  }
    var startButton = document.getElementById("startbutton");
    startButton.remove();
}

function berekenEindResultaat() {
  secularbtn.remove();
  regularbtn.remove();
  calculateImportantPoints();
  for(b = 0; b < anwsers.length; b++) {
    for(a=0;a<subjects[b].parties.length;a++){
      if(anwsers[b] == subjects[b].parties[a].position){
        console.log("je bent het eens met " + subjects[b].parties[a].name);
        partijScore[subjects[b].parties[a].name]++
        console.log(partijScore);
      }
    }
  }
  
  for(var key in partijScore){
    var resultElement = document.createElement("p");
    resultElement.innerHTML = key + ": " + partijScore[key];
    resultElement.setAttribute("id", "resultElement");
    document.getElementById("grid-container").appendChild(resultElement);
  }
}
  


