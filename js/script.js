var checkboxPartij = document.getElementById("party-results");
checkboxPartij.hidden = true;

var checkboxStatement = document.getElementById("statement-results");
checkboxStatement.hidden = true;

let partijScore = {
    "PVV" : 0,
    "D66": 0,
    "CU": 0,
    "SP": 0
  };

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
      checkboxPartij.hidden = false;
      checkboxStatement.hidden = false;
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
      checkboxPartij.hidden = false;
      checkboxStatement.hidden = false;
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
      checkboxPartij.hidden = false;
      checkboxStatement.hidden = false;
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
      eens.remove(), oneens.remove(), geenKeus.remove(), terug.remove();
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
  
  checkboxPartij.hidden = true;
  checkboxStatement.hidden = true;
 
}
}
  

 

