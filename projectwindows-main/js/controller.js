const controller = {};
controller.register = (data) => {
    if (data.firstName.trim() === "") {
        document.getElementById('ftname-error').innerText = 'Enter your first name'
    }
    else {
        document.getElementById("ftname-error").innerText = "";
    }

    if (data.lastName === "") {
        document.getElementById('ltname-error').innerText = 'Enter your last name'
    }
    else {
        document.getElementById('ltname-error').innerText = ''
    }

    if (data.email === "") {
        document.getElementById('email-error').innerText = "Enter your email"
    }
    else {
        document.getElementById('email-error').innerText = ""
    }

    if (data.password === "") {
        document.getElementById('pass-error').innerText = "pAsSwOrD eMpTy"
    }
    else {
        document.getElementById('pass-error').innerText = ""
    }

    if (data.confirmPassword === "") {
        document.getElementById('conpass-error').innerText = "Please confirm password"
    }
    else if (data.confirmPassword.trim() !== data.password.trim()) {
        document.getElementById('conpass-error').innerText = "Password does not match"
    }
    else {
        document.getElementById('conpass-error').innerText = ""
    }


    if (data.firstName !== "" &&
        data.lastName !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.password === data.confirmPassword
    ) {
        model.register(data);
    }
}

controller.login = (dataLogin) =>{
    if(dataLogin.email.trim() === ""){
        document.getElementById('email-error').innerText = "Enter your email"
    }
    else{
        document.getElementById('email-error').innerText = ""
    }
    if(dataLogin.password.trim() === ""){
        document.getElementById('pass-error').innerText = "Enter your password"
    }
    else{
        document.getElementById('pass-error').innerText = ""
    }

    if(dataLogin.email !=="" && dataLogin.password !== ""){
        model.login(dataLogin);
        console.log("Just a moment...")
    }
}