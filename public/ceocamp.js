const firebaseConfig = {
    apiKey: "AIzaSyD8a6Hll7YjTs0_aPUx6cNNnA1hSCzS8TM",
    authDomain: "yeolpoomta-977d9.firebaseapp.com",
    databaseURL: "https://yeolpoomta-977d9-default-rtdb.firebaseio.com",
    projectId: "yeolpoomta-977d9",
    storageBucket: "yeolpoomta-977d9.appspot.com",
    messagingSenderId: "165499323571",
    appId: "1:165499323571:web:b4cd07763d8a9f778c5cc6",
    measurementId: "G-ZE12GCR5X5"
  };
  
firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
