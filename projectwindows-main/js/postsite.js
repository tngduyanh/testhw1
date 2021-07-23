var ImgUrl;
var files = [];
var reader = new FileReader();
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


    view.setActiveScreen('postsite');
    noname();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User:", user)
            model.currentUser = {
                email: user.email,
                displayName: user.displayName
            }
            document.getElementsByName("message")[0].placeholder = "What's on your mind, " +  model.currentUser.displayName + "?"
            console.log("user", user);
            view.setActiveScreen('postsite')
        }
        else {
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
var tzoffset = (new Date()).getTimezoneOffset() * 60000;
var ImgName = Math.random()
const uploadImage = async () => {
    var uploadTask = firebase.storage().ref("Images/" + ImgName + ".png").put(files[0])
        uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Uploading: " + progress + "%")
        }),
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;
        })
}
function publishPost() {
    // get message
        
    var message = document.getElementById("message").value;
    console.log("Message", message);
    uploadImage();
    
    // save in database
    firebase.database().ref("messages9").push().set({
        "sender": model.currentUser.displayName,
        "email": model.currentUser.email,
        "message": message,
        "ImageName": ImgName,
        "creationTime": (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
    });
    // prevent form from submitting
    return false;
};
function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");
    // delete message
    firebase.database().ref("messages9").child(messageId).remove();
    alert("Comment deleted!")
    noname1();
    location.reload(); 
}
const noname1 = async () => {
    await firebase.database().ref("messages9").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById("message-" + snapshot.key).innerText = "This comment has been removed";
});
}
const noname = async () => {
    await firebase.database().ref("messages9").on("child_added", function (snapshot) {
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
        document.getElementById("messages1").innerHTML += cmtcontent;
        document.getElementById("message").value = ""
    });
}
/*const noname2 = async () => {
    await firebase.database().ref("messages1").child("replies").on("child_added", function (snapshot) {
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
        cmtcontent += snapshot.val().reply;
        cmtcontent += "</div>"
        cmtcontent += "</div>"
        cmtcontent += "<div style='margin: 0 auto; width:30%; height: 100%;'>";
        cmtcontent += "<form onsubmit='replyMessage();'>"
        cmtcontent += "<input id='reply' rows='2' cols='25' type='text' name='reply' placeholder='Type your reply here' autocomplete='off' style='width:100%'>"
        cmtcontent += "<input type='submit' class='button' value='Comment'>"
        cmtcontent += "</form>"
        cmtcontent += "<div id='replies1' class='messages'></div>"
        cmtcontent += "</div>"
        document.getElementById("replies1").innerHTML += cmtcontent;
        document.getElementById("reply").value = ""
    });
}
function replyMessage(self) {
    // get message
    var messageId = self.getAttribute("data-id");
    var reply = document.getElementById("reply").value;
    // save in database
    firebase.database().ref("messages1").child(messageId).child("replies").push().set({
        "sender": model.currentUser.displayName,
        "email": model.currentUser.email,
        "reply": reply,
        "creationTime": (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
    });
    noname2();
    // prevent form from submitting
    return false;
};*/
window.onload = init;
document.getElementById("select").onclick = function(e){
    var input = document.createElement("input")
    input.type='file'
    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL(files[0])
    }
    input.click();
}
