function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

		// check is user input matches username and password of a current index of the objPeople array
		if(username=="admin" && password=="admin"){
			window.location.href="user1.html"
		}
		if(username=="2" && password=="2"){
			window.location.href="user2.html"
		}
		if(username=="3" && password=="3"){
			window.location.href="user3.html"
		}
		if(username=="4" && password=="4"){
			window.location.href="user4.html"
		}
		
	}
