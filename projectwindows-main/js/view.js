const view = {};
document.getElementById("Login").addEventListener('click',()=>{
    view.setActiveScreen("loginScreen")
})
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "registerScreen":
            document.getElementById('z10').style.overflow = "hidden"
            document.getElementById('app').innerHTML = component.registerScreen;
            document.getElementById("Login").innerText = "Return"
            document.getElementById('Login').addEventListener('click', () => {
                view.setActiveScreen(history.back());
            })
            const registerForm = document.getElementById('reg-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value.trim(),
                    lastName: registerForm.lastName.value.trim(),
                    email: registerForm.email.value.trim(),
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                console.log(data);
                controller.register(data);
            });

            document.getElementById('redirect-to-login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
            });

            break;
        case "loginScreen":
            document.getElementById('z10').style.overflow = "hidden"
            document.getElementById('app').innerHTML = component.loginScreen;
            document.getElementById("Login").innerText = "Return"
            document.getElementById('Login').addEventListener('click', () => {
                view.setActiveScreen(history.back());
            })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                window.location.href = "registerscreen.html"
            })
            const loginForm = document.getElementById('log-form');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(dataLogin);
            })
            break;
        case "chatScreen":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.chatScreen;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    document.getElementById("Login").innerText = "Login"
                })
            }
            /*const sendMessageForm = document.getElementById("send-messages-form")
            const chatname = document.getElementById("hi3").innerText
            sendMessageForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const message = {
                    owner: model.currentUser.email,
                    content: sendMessageForm.message.value,
                    creationTime: (new Date()).toISOString()
                }
                const chatmem = {
                    owner: `${chatname}`,
                    content: sendMessageForm.message.value + " too"
                }
                console.log(chatmem);
                model.addMessage(message);
                sendMessageForm.message.value = "";
            })*/
            //document.getElementById('hi').innerHTML = `Welcome ${model.currentUser.displayName}`;
            /*model.loadCon();
            model.listenConchange();
            view.showCon();
            view.showcurrentCon();*/
            /*document.querySelector(".signout .button").addEventListener('click',()=>{
                firebase.auth().signOut();
            })
            const addUserForm = document.getElementById("add-user-form");
            addUserForm.addEventListener("submit",(e)=>{
                e.preventDefault();
                const data = addUserForm.email.value;
                controller.addUserConversation(data);
            })*/
            break;
            case "aboutWindows":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.aboutWindows;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "MW10LLW7":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.MW10LLW7;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "htpyc":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.htpyc;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "W11":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.W11;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "W1021H1":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.W1021H1;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "news":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.news;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "W10SP":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.W10SP;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "W11SE":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.W11SE;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "history":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.history;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "cuswin":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.cuswin;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "postsite":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.postsite;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "MW10LLWXP":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.MW10LLWXP;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "W10SMOW11":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.W10SMOW11;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
            case "Rainmeter":
            document.getElementById('z10').style.overflow = "visible"
            console.log("Signed in as: " + model.currentUser)
            document.getElementById('app').innerHTML = component.Rainmeter;
            if(model.currentUser == undefined){
             document.getElementById("Login").innerText = "Login"
             document.getElementById('Login').addEventListener('click', () => {
                window.location.href = "loginscreen.html"
             })
            }
            else{
                document.getElementById("Login").innerText = "Sign out"
                document.getElementById('Login').addEventListener('click', () => {
                    firebase.auth().signOut();
                    model.currentUser = undefined;
                    
                    document.getElementById("Login").innerText = "Login"
                })
            }
            break;
    }
}


/*view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add("message-container")
    if (model.currentUser.email === message.owner) {
        messageWrapper.classList.add("mine")
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    else{
        messageWrapper.classList.add("theirs")
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    document.querySelector(".list-messages").appendChild(messageWrapper)*/