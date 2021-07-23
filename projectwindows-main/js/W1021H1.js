var a = 0
const init = () => {
    console.log("Window loaded");
  var firebaseConfig = {
    apiKey: "AIzaSyBlIH0F1CVn6R8Xig15JwXwd9ywVmpFnXI",
    authDomain: "noname-617c6.firebaseapp.com",
    databaseURL: "https://noname-617c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "noname-617c6",
    storageBucket: "noname-617c6.appspot.com",
    messagingSenderId: "882302910208",
    appId: "1:882302910208:web:ca4846571bb3b5107a3de5"
  };
  firebase.initializeApp(firebaseConfig);


    view.setActiveScreen('W1021H1');
    noname();
    firebase.auth().onAuthStateChanged(function(user){ 
        if (user) {
            console.log("User:", user)
            model.currentUser = {
                email: user.email,
                displayName: user.displayName
            }
             console.log("user",user);
              view.setActiveScreen('W1021H1') 
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
function change(){
 if(a == 0){
  document.getElementById("z1").style.display= "block";
  document.getElementById("z2").innerText = "General fixes (click to hide)"
  a = 1
 }
 else if(a == 1){
  document.getElementById("z1").style.display= "none";
  document.getElementById("z2").innerText = "General fixes (click to read more)"
  a = 0
 }
}
var tzoffset = (new Date()).getTimezoneOffset() * 60000;

function sendMessage() {
    // get message
    var message = document.getElementById("message").value;
    // save in database
    firebase.database().ref("messages8").push().set({
        "sender": model.currentUser.displayName,
        "email": model.currentUser.email,
        "message": message,
        "creationTime": (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
    });
    // prevent form from submitting
    return false;
};
function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message
    firebase.database().ref("messages8").child(messageId).remove();
    alert("Comment deleted!")
    noname1();
    location.reload();
}
const noname1 = async () => {
    await firebase.database().ref("messages8").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerText = "This comment has been removed";
});
}
const noname = async () => {
    await firebase.database().ref("messages8").on("child_added", function (snapshot) {
        var cmtcontent = "";
        // give each message a unique ID
        cmtcontent += "<div id='message-" + snapshot.key + "' style='max-width: 100%; width: 100%; background: #b9b9b9; display: block; margin-top: 10px; text-align: left; padding: 7px 10px; border-radius: 5px; font-family: Arial, Helvetica, sans-serif;'>";
        // show delete button if message is sent by me
        cmtcontent += "<img src='img/index.png' id='imageicon'>"
        cmtcontent += "<b><div class='owner'>"
        cmtcontent += snapshot.val().sender
        cmtcontent += "</div></b>"
        cmtcontent += "<div class='content'>" + snapshot.val().creationTime + "</div>"
        if (snapshot.val().email == model.currentUser.email) {
            cmtcontent += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>";
            cmtcontent += "Delete";
            cmtcontent += "</button>";
        }
        cmtcontent += "<div class='content'>"
        cmtcontent += snapshot.val().message;
        cmtcontent += "</div>"
        cmtcontent += "</div>"
        document.getElementById("messages8").innerHTML += cmtcontent;
        document.getElementById("message").value = ""
    });
}