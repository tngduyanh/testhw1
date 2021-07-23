const init = () => {
    console.log("Window loaded");
  var firebaseConfig = {
    apiKey: "AIzaSyBlIH0F1CVn6R8Xig15JwXwd9ywVmpFnXI",
    authDomain: "noname-617c6.firebaseapp.com",
    projectId: "noname-617c6",
    databaseURL: "https://noname-617c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "noname-617c6.appspot.com",
    messagingSenderId: "882302910208",
    appId: "1:882302910208:web:ca4846571bb3b5107a3de5"
  };
  firebase.initializeApp(firebaseConfig);


    view.setActiveScreen('chatScreen');
    firebase.auth().onAuthStateChanged(function(user){ 
        if (user) {
            console.log("User:", user)
            model.currentUser = {
                email: user.email,
                displayName: user.displayName
            }
             console.log("user",user);
              view.setActiveScreen('chatScreen') 
            } 
        else{   
            console.log("You are not signed in") 
        } 
        });
        firestoreFunction();
};

window.onload = init;
const firestoreFunction = async () => {
    const documentId = '6UpXEIQOLk0Bt8KijEkb'
    const response = await firebase.firestore().collection("users").doc(documentId).get()
    console.log(response.data())
}