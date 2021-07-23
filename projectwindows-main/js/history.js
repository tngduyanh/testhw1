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


    view.setActiveScreen('history');
    noname();
    firebase.auth().onAuthStateChanged(function(user){ 
        if (user) {
            console.log("User:", user)
            model.currentUser = {
                email: user.email,
                displayName: user.displayName
            }
             console.log("user",user);
              view.setActiveScreen('history') 
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
    document.getElementById("text4").innerHTML="Windows Evolution - 4096 (short)"
    document.getElementById("text5").style.color="#8fa24c"
    document.getElementById("text6").style.color="white"
    document.getElementById("text7").style.color="#3e4042"
    document.getElementById("text8").style.color="#3e4042"
    document.getElementById("text9").style.color="#3e4042"
    document.getElementById("text10").style.color="#3e4042"
    document.getElementById("text11").style.color="#3e4042"
    document.getElementById("text12").style.color="#3e4042"
    document.getElementById("text13").style.color="#3e4042"
    document.getElementById("text14").style.color="#3e4042"
    document.getElementById("text15").style.color="#3e4042"
    document.getElementById("text16").style.color="#3e4042"
    document.getElementById("video2").src="https://www.youtube.com/embed/E7zt8dxBi8A"
}
function change1(){
    document.getElementById("text4").innerHTML="Evolution of Microsoft Windows (long)"
    document.getElementById("text6").style.color="#3e4042"
    document.getElementById("text5").style.color="#3e4042"
    document.getElementById("text7").style.color="#8fa24c"
    document.getElementById("text8").style.color="white"
    document.getElementById("text9").style.color="#3e4042"
    document.getElementById("text10").style.color="#3e4042"
    document.getElementById("text11").style.color="#3e4042"
    document.getElementById("text12").style.color="#3e4042"
    document.getElementById("text13").style.color="#3e4042"
    document.getElementById("text14").style.color="#3e4042"
    document.getElementById("text15").style.color="#3e4042"
    document.getElementById("text16").style.color="#3e4042"
    document.getElementById("video2").src="https://www.youtube.com/embed/JekE1C-fWn0"
}
function change2(){
    document.getElementById("text4").innerHTML="Evolution of Windows Startup Sounds"
    document.getElementById("text6").style.color="#3e4042"
    document.getElementById("text5").style.color="#3e4042"
    document.getElementById("text7").style.color="#3e4042"
    document.getElementById("text8").style.color="#3e4042"
    document.getElementById("text9").style.color="#8fa24c"
    document.getElementById("text10").style.color="white"
    document.getElementById("text11").style.color="#3e4042"
    document.getElementById("text12").style.color="#3e4042"
    document.getElementById("text13").style.color="#3e4042"
    document.getElementById("text14").style.color="#3e4042"
    document.getElementById("text15").style.color="#3e4042"
    document.getElementById("text16").style.color="#3e4042"
    document.getElementById("video2").src="https://www.youtube.com/embed/HrPRtYvCvZI"
}
function change3(){
    document.getElementById("text4").innerHTML="Evolution of Windows Startup and Shutdown sounds"
    document.getElementById("text6").style.color="#3e4042"
    document.getElementById("text5").style.color="#3e4042"
    document.getElementById("text7").style.color="#3e4042"
    document.getElementById("text8").style.color="#3e4042"
    document.getElementById("text9").style.color="#3e4042"
    document.getElementById("text10").style.color="#3e4042"
    document.getElementById("text11").style.color="#8fa24c"
    document.getElementById("text12").style.color="white"
    document.getElementById("text13").style.color="#3e4042"
    document.getElementById("text14").style.color="#3e4042"
    document.getElementById("text15").style.color="#3e4042"
    document.getElementById("text16").style.color="#3e4042"
    document.getElementById("video2").src="https://www.youtube.com/embed/f8ttFr4N0jU"
}
function change4(){
    document.getElementById("text4").innerHTML="Evolution of Windows Startup and Shutdown Sounds (very long)"
    document.getElementById("text6").style.color="#3e4042"
    document.getElementById("text5").style.color="#3e4042"
    document.getElementById("text7").style.color="#3e4042"
    document.getElementById("text8").style.color="#3e4042"
    document.getElementById("text9").style.color="#3e4042"
    document.getElementById("text10").style.color="#3e4042"
    document.getElementById("text11").style.color="#3e4042"
    document.getElementById("text12").style.color="#3e4042"
    document.getElementById("text13").style.color="#8fa24c"
    document.getElementById("text14").style.color="white"
    document.getElementById("text15").style.color="#3e4042"
    document.getElementById("text16").style.color="#3e4042"
    document.getElementById("video2").src="https://www.youtube.com/embed/-NnRIPKRl0o"
}
function change5(){
    document.getElementById("text4").innerHTML="All Sounds (Win 3.1 - Win 8)"
    document.getElementById("text6").style.color="#3e4042"
    document.getElementById("text5").style.color="#3e4042"
    document.getElementById("text7").style.color="#3e4042"
    document.getElementById("text8").style.color="#3e4042"
    document.getElementById("text9").style.color="#3e4042"
    document.getElementById("text10").style.color="#3e4042"
    document.getElementById("text11").style.color="#3e4042"
    document.getElementById("text12").style.color="#3e4042"
    document.getElementById("text13").style.color="#3e4042"
    document.getElementById("text14").style.color="#3e4042"
    document.getElementById("text15").style.color="#8fa24c"
    document.getElementById("text16").style.color="white"
    document.getElementById("video2").src="https://www.youtube.com/embed/tMA25QAvbhM"
}
function change6(){
  if(a == 0){
   document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="block"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text22b").style.display= "block";
   document.getElementById("image1").src="img/Windows-1.0-1.jpg"
   a = 1
  }
  else if(a == 1){
   document.getElementById("text17a").style.display="block"
   document.getElementById("text18a").style.display="block"
   document.getElementById("text19a").style.display="block"
   document.getElementById("text20a").style.display="block"
   document.getElementById("text21a").style.display="block"
   document.getElementById("text22a").style.display="block"
   document.getElementById("text23a").style.display="block"
   document.getElementById("text24a").style.display="block"
   document.getElementById("text25a").style.display="block"
   document.getElementById("text26a").style.display="block"
   document.getElementById("text27a").style.display="block"
   document.getElementById("text28a").style.display="block"
   document.getElementById("text29a").style.display="block"
   document.getElementById("text30a").style.display="block"
   document.getElementById("text31a").style.display="block"
   document.getElementById("text32a").style.display="block"
   document.getElementById("text33a").style.display="block"
   document.getElementById("text34a").style.display="block"
   document.getElementById("text35a").style.display="block"
   document.getElementById("text36a").style.display="block"
   document.getElementById("text37a").style.display="block"
   document.getElementById("text38a").style.display="block"
   document.getElementById("text39a").style.display="block"
   document.getElementById("text22b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change7(){
  if(a == 0){
   document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="block"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text23b").style.display= "block";
   document.getElementById("image1").src="img/Windows_2.0.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text23b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change8(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="block"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text24b").style.display= "block";
   document.getElementById("image1").src="img/win3.0.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text24b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change9(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="block"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text25b").style.display= "block";
   document.getElementById("image1").src="img/windows-3.1.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text25b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change10(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="block"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text26b").style.display= "block";
   document.getElementById("image1").src="img/winnt31.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text26b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change11(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="block"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text27b").style.display= "block";
   document.getElementById("image1").src="img/win32about.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text27b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change12(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="block"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text28b").style.display= "block";
   document.getElementById("image1").src="img/winnt35.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text28b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change13(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="block"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text29b").style.display= "block";
   document.getElementById("image1").src="img/win95.webp"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text29b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change14(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="block"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text30b").style.display= "block";
   document.getElementById("image1").src="img/winnt40.webp"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text30b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change15(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="block"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text31b").style.display= "block";
   document.getElementById("image1").src="img/win98.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text31b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change16(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="block"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text32b").style.display= "block";
   document.getElementById("image1").src="img/win2000.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text32b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change17(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="block"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text33b").style.display= "block";
   document.getElementById("image1").src="img/winme.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text33b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change18(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="block"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text34b").style.display= "block";
   document.getElementById("image1").src="img/winxp.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text34b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change19(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="block"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text35b").style.display= "block";
   document.getElementById("image1").src="img/winvista.webp"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text35b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change20(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="block"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text36b").style.display= "block";
   document.getElementById("image1").src="img/win7.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text36b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change21(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="block"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text37b").style.display= "block";
   document.getElementById("image1").src="img/win8.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text37b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change22(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="block"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text38b").style.display= "block";
   document.getElementById("image1").src="img/win81.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text38b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change23(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="block"
   document.getElementById("text39b").style.display= "block";
   document.getElementById("image1").src="img/win10.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text39b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change24(){
  if(a == 0){
    document.getElementById("text17a").style.display="block"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text17b").style.display= "block";
   document.getElementById("image1").src="img/winser2003.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text17b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change25(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="block"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text18b").style.display= "block";
   document.getElementById("image1").src="img/winser2008.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text18b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change26(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="block"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text19b").style.display= "block";
   document.getElementById("image1").src="img/winser2012.png"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text19b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change27(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="block"
   document.getElementById("text21a").style.display="none"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text20b").style.display= "block";
   document.getElementById("image1").src="img/winser2016.jpg"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text20b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 function change28(){
  if(a == 0){
    document.getElementById("text17a").style.display="none"
   document.getElementById("text18a").style.display="none"
   document.getElementById("text19a").style.display="none"
   document.getElementById("text20a").style.display="none"
   document.getElementById("text21a").style.display="block"
   document.getElementById("text22a").style.display="none"
   document.getElementById("text23a").style.display="none"
   document.getElementById("text24a").style.display="none"
   document.getElementById("text25a").style.display="none"
   document.getElementById("text26a").style.display="none"
   document.getElementById("text27a").style.display="none"
   document.getElementById("text28a").style.display="none"
   document.getElementById("text29a").style.display="none"
   document.getElementById("text30a").style.display="none"
   document.getElementById("text31a").style.display="none"
   document.getElementById("text32a").style.display="none"
   document.getElementById("text33a").style.display="none"
   document.getElementById("text34a").style.display="none"
   document.getElementById("text35a").style.display="none"
   document.getElementById("text36a").style.display="none"
   document.getElementById("text37a").style.display="none"
   document.getElementById("text38a").style.display="none"
   document.getElementById("text39a").style.display="none"
   document.getElementById("text21b").style.display= "block";
   document.getElementById("image1").src="img/winser2019.webp"
   a = 1
  }
  else if(a == 1){
    document.getElementById("text17a").style.display="block"
    document.getElementById("text18a").style.display="block"
    document.getElementById("text19a").style.display="block"
    document.getElementById("text20a").style.display="block"
    document.getElementById("text21a").style.display="block"
    document.getElementById("text22a").style.display="block"
    document.getElementById("text23a").style.display="block"
    document.getElementById("text24a").style.display="block"
    document.getElementById("text25a").style.display="block"
    document.getElementById("text26a").style.display="block"
    document.getElementById("text27a").style.display="block"
    document.getElementById("text28a").style.display="block"
    document.getElementById("text29a").style.display="block"
    document.getElementById("text30a").style.display="block"
    document.getElementById("text31a").style.display="block"
    document.getElementById("text32a").style.display="block"
    document.getElementById("text33a").style.display="block"
    document.getElementById("text34a").style.display="block"
    document.getElementById("text35a").style.display="block"
    document.getElementById("text36a").style.display="block"
    document.getElementById("text37a").style.display="block"
    document.getElementById("text38a").style.display="block"
    document.getElementById("text39a").style.display="block"
   document.getElementById("text21b").style.display= "none";
   document.getElementById("image1").src=""
   a = 0
  }
 }
 var tzoffset = (new Date()).getTimezoneOffset() * 60000;

 function sendMessage() {
     // get message
     var message = document.getElementById("message").value;
     // save in database
     firebase.database().ref("messages3").push().set({
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
     firebase.database().ref("messages3").child(messageId).remove();
     alert("Comment deleted!")
     noname1();
     location.reload(); 
 }
 const noname1 = async () => {
     await firebase.database().ref("messages3").on("child_removed", function (snapshot) {
     // remove message node
     document.getElementById("message-" + snapshot.key).innerText = "This comment has been removed";
 });
 }
 const noname = async () => {
     await firebase.database().ref("messages3").on("child_added", function (snapshot) {
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
         document.getElementById("messages3").innerHTML += cmtcontent;
         document.getElementById("message").value = ""
     });
 }