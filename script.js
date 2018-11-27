
function sayHello() {

	console.log("Hello");
}

sayHello();


var database = [


{

	username: "andrei",
	password: "supersecret"
}



];

var newsFeed = [

{
username: "Bobby",
timeline:"I like Chicken"


},
{
username: "Chucky",
timeline:"Eait it"

}




];

var userNamePrompt = prompt("Whats your name?");
var passwordPrompt = prompt("Whats your pass?");


function signIn(user, pass){

	if (user === database[0].username && pass == database[0].password) {
		console.log(newsFeed);

	} else {

		alert("Sorry, NOOOOOOOOO!");
	}

}

signIn(userNamePrompt,passwordPrompt)