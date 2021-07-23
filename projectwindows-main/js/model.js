const model = {};
model.currentUser = undefined
model.con = undefined
model.crrCon = undefined
model.collectionName = "conversations"
model.register = async (data) => {
    try {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);


        firebase.auth().currentUser.updateProfile({
            displayName: data.lastName + " " + data.firstName
        });



        firebase.auth().currentUser.sendEmailVerification();

        alert('Your email has been registered, please check your email');
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
    window.location.href = "loginscreen.html"
}

model.login = async (dataLogin) => {
    try{
        const response = await firebase
        .auth()
        .signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
        dataLogin.isEmailVerified()
    }
    catch (err){
        if(err.code == 'auth/user-not-found'
        || err.code == 'auth/invalid-email'
        ){
            document.getElementById('email-error').innerText= err.message
        }
        else if(err.code == 'auth/wrong-password'){
            console.log("Error:", err)
            document.getElementById("pass-error").innerText= err.message
        }
        else{
            model.login = model.currentUser
            console.log("Sign in successfully")
            window.location.href = "main.html"
            document.getElementById("Login").innerText = "Sign out"
        }
    }
}
/*model.crtCon = (data)=>{
    firebase.firestore().collection(model.collectionName).add(data);
    view.setActiveScreen("chatScreen",true)
}
model.addMessage = (message)=>{
    const dataTUD = {
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    }
    firebase.firestore().collection(model.collectionName).doc(model.crrCon.id).update(dataTUD)
    firebase.firestore()
    .collection(model.collectionName)
    .doc("FWf31Go1tS3XIKx2k7Fr")
    .update(dataToUpDate);
}*/