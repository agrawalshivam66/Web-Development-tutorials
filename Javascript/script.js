var database=[{
username:"Shivam",
password:"shivam"
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

function signIn(user, pass){
	if(user===database[0].username && pass===database[0].password){
		console.log(newsFeed);
	}
	else{
		alert("Sorry wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);