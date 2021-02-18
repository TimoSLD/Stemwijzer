var i = 0;
if (i === subjects.length){
  document.getElementById("title").innerHTML = "klaar";
  document.getElementById("statement").innerHTML = "finished ";
  eens.remove();
  oneens.remove(); 
  geenKeus.remove();
  terug.remove();
}

let anwsers = [];

var eensClicked = 0;
var oneensClicked = 0;
var geenKeusClicked = 0;
var terugClicked = 0;

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
      console.log("je hebt " + eensClicked + "x eens geklikt");
      i++;
      if (i === subjects.length){
        document.getElementById("title").innerHTML = "U bent klaar!";
        document.getElementById("statement").innerHTML = "klik op de knop: krijg resultaten om uw resultaten op te halen";
        eens.remove();
        oneens.remove();
        geenKeus.remove();
        terug.remove();
        var getResults = document.createElement("BUTTON");
        getResults.innerHTML = "krijg resultaat";
        getResults.setAttribute("id", "getresult");
        document.getElementById("grid-container").appendChild(getResults);
        getResults.onclick = function(){
          getResults.remove();
          document.getElementById("title").innerHTML = "resultaten:";
          document.getElementById("statement").innerHTML = "";
        }
      }
      document.getElementById("title").innerHTML = subjects[i].title;
      document.getElementById("statement").innerHTML = subjects[i].statement;
     
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
        eens.remove();
        oneens.remove();
        geenKeus.remove();
        terug.remove();
        var getResults = document.createElement("BUTTON");
        getResults.innerHTML = "krijg resultaat";
        getResults.setAttribute("id", "getresult");
        document.getElementById("grid-container").appendChild(getResults);
        getResults.onclick = function(){
          getResults.remove();
          document.getElementById("title").innerHTML = "resultaten:";
          document.getElementById("statement").innerHTML = "";
        }
      }
      document.getElementById("title").innerHTML = subjects[i].title;
      document.getElementById("statement").innerHTML = subjects[i].statement;
    
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
        eens.remove();
        oneens.remove();
        geenKeus.remove();
        terug.remove();
        var getResults = document.createElement("BUTTON");
        getResults.innerHTML = "krijg resultaat";
        getResults.setAttribute("id", "getresult");
        document.getElementById("grid-container").appendChild(getResults);
        getResults.onclick = function(){
          getResults.remove();
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
          eensClicked = 0;
          oneensClicked = 0;
          geenKeusClicked = 0;
          terugClicked = 0;
          start();
        }
      }
          document.getElementById("title").innerHTML = subjects[i].title;
          document.getElementById("statement").innerHTML = subjects[i].statement;
      }
    var startButton = document.getElementById("startbutton");
    startButton.remove();
}



 

