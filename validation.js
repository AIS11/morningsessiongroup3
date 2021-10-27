function adds(){
    var fullname = document.getElementById("fullname").value
    var phonenumber = document.getElementById("phonenumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var pass = document.getElementById("pass").value

    

    if(fullname === "" || phonenumber ==="" || email === "" || password === "" || pass ===""){ 
        document.getElementById("message").innerHTML = "Please fill out this fields"
    } 
    else if(password != pass ) {
        document.getElementById("message").innerHTML = "confirm password is not a match with password"
    }
    else if (password.length > 8 || pass.length > 8) {
        document.getElementById("message").innerHTML = "password should not be more than eight characters"
    }
    else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50) {
        document.getElementById("message").innerHTML = "please enter a valid name"
    }

    else if ((!email.match(/\S+@\S+/))) {
        document.getElementById("message").innerHTML = "please enter a valid email"
    }

    else {
        document.getElementById("message").innerHTML = "Registration success" 
        window.location.href = "dashboard.html"
    }
    
    
}