var checkboxPartij = document.getElementById("parties");
checkboxPartij.hidden = true;

var checkboxStatement = document.getElementById("statement-results");
checkboxStatement.hidden = true;

const Field = document.getElementById("parties");

function generateCheckboxList(givenArray, givenField) {

  var checkboxes = "";
  var classLabel = "";
  var classLabelStatement = "";

  if (givenArray == parties) {
      checkboxes = "partyCheckbox";
      classLabel = "partyLabel";
      classLabelStatement =  "" ;
  
  }
  var loopCount = 0;
  givenArray.forEach(object => {
      var newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      newCheckbox.setAttribute("name", parties[loopCount].name);
      newCheckbox.value = loopCount;
      newCheckbox.classList.add('mr-2', 'ml-1', `${checkboxes}`);
      var newLabel = document.createElement("label");
      if (object.title != null) {
          newLabel.innerHTML = object.title;
      }
      if (object.name != null) {
          newLabel.innerHTML = object.name;
      }

      newLabel.setAttribute("class", classLabel);
      var newLine = document.createElement("br");
      givenField.append(newLabel);
      givenField.append(newCheckbox);
      givenField.append(newLine);
      newCheckbox = null;
      loopCount++;

  });

  if (givenArray == parties) {
    var btnSecular = document.createElement("button");
    var partyCheckboxes = document.querySelectorAll(".partyCheckbox");
    btnSecular.innerHTML = "Seculiere partijen";
    btnSecular.addEventListener("click", function () {
        partyCheckboxes.forEach(element => {
            element.checked = false;
            var name = element.getAttribute("name");
            parties.forEach(party => {
                if (party.secular == true) {
                    if (party.name == name) {
                        element.checked = true;
                    }
                }
            });
        })
    });
    var btnSize = document.createElement("button");
    var partyCheckboxes = document.querySelectorAll(".partyCheckbox");
    btnSize.innerHTML = "Selecteer alle grote partijen";
    btnSize.addEventListener("click", function () {
        partyCheckboxes.forEach(element => {
            var name = element.getAttribute("name");
            element.checked = false;
            parties.forEach(party => {
                if (party.size > 0) {
                    if (party.name == name) {
                        element.checked = true;
                        
                    }
                }
            });
        });
    });
    var loopCount1 = 0;
  givenArray.forEach(object => {
      var newCheckboxStatement = document.createElement("input");
      newCheckboxStatement.type = "checkbox";
      newCheckboxStatement.setAttribute("name", subjects[loopCount1].statement);
      newCheckboxStatement.value = loopCount1;
      newCheckboxStatement.classList.add(`${checkboxes}`);
      var newLabelStatement = document.createElement("label");
      if (object.title != null) {
        newCheckboxStatement.innerHTML = object.title;
      }
      if (object.name != null) {
        newCheckboxStatement.innerHTML = object.name;
      }

      newCheckboxStatement.setAttribute("class", classLabelStatement);
      newLineStatement = document.createElement("br");
      givenField.append(newLabelStatement);
      givenField.append(newCheckboxStatement);
      givenField.append(classLabelStatement);
      newCheckboxStatement = null;
      loopCount1++;

  });



        givenField.append(btnSize);
        givenField.append(btnSecular);
    }
}

generateCheckboxList(parties, Field);


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



//for (let index = 0; index < parties.length; index++) {
  //parties.name = partijScore[index];
//}


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
      eens.remove(), oneens.remove(), geenKeus.remove(), terug.remove(),  overslaan.remove();
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
  

