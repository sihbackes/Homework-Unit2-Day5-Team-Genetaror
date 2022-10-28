let nameTeam = document.getElementById("input-add-member");
let display = document.getElementById("list-display-names");
let teams = document.getElementById("input-add-teams");
let containerTitle = document.getElementById("container-title");
let listOfNames = [];
let newList = [];
function addTeamMember() {
  listOfNames.push(nameTeam.value); // get the name on the input and push to array listOfNames
  let nameList = document.createElement("li"); // create an item li to display the name
  display.appendChild(nameList); //display the li inside an ol elemente on HTML
  nameList.innerHTML = nameTeam.value; //put the name inside of the ol to display on the screen
  nameTeam.value = ""; //empty the input to write a new name
  newList = listOfNames.sort((a, b) => 0.5 - Math.random()); //randomize de array of names
}

number = Number(teams.value); //get the number of how many teams we want

function randomTeams() {
  let arrayOfTeams = [];
  let average = newList.length / number;
  for (let i = 0; i < newList.length; i += average) {
    arrayOfTeams.push(newList.slice(i, i + average));
    console.log(arrayOfTeams[i]);
  }
  return arrayOfTeams;
}

function displayTeams() {
  number = Number(teams.value); //get the number of how many teams we want

  for (let i = 1; i <= number; i++) {
    let container = document.createElement("div"); //creates a new div
    container.classList.add("container-tem-box-unity"); //aplly class with display flex to it
    containerTitle.appendChild(container); //put the div on the specific location on HTML
    let title = document.createElement("h2"); //create h2 Title of team
    container.appendChild(title); //put the title on the location
    title.innerText = `Team ${i}`; //change the name of title accordingly to the number
    let newBoxTeam = document.createElement("div"); //create a new div to display the names
    newBoxTeam.classList.add("box-display-teams"); //add the style class
    container.appendChild(newBoxTeam); //put the display on the location
  }
}
