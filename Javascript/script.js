var database=[{
username:"Shivam",
password:"shivam"
},
{
username:"user2",
password:"pass"
},
{
username:"user3",
password:"123"
}
];

var newsFeed=[{
username:"bobby",
timeline:"So tired from all that learning"
},
{
	username:"Sally",
	timeline:"Javascript is soo cool!"
}
];

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("whats your password?");

function isUserValid(username, password){
	for(var i=0; i < database.length; i++){
	if(username===database[i].username && password===database[i].password){
		return true;
	}
}
return false;
}

function signIn(username, password){
		
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}
	else{
		alert("Sorry wrong username or password");
	}
	}
	


signIn(userNamePrompt, passwordPrompt);