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

    firestoreFunction();
};

window.onload = init;
var ImgUrl;
var files = [];
var reader = new FileReader();
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
document.getElementById("upload").onclick = function(){
        var ImgName = Math.random()
        var uploadTask = firebase.storage().ref("Images/" + ImgName + ".png").put(files[0])
        uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Uploading: " + progress + "%")
        }),
        function(error){
            alert("Error in saving the image")
        },
        function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                ImgUrl = url;
            }),
            firebase.database.ref("messages9").set({
                Name: ImgName,
                Link: ImgUrl,
            })
        }
}