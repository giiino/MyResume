    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyAuFt_gTb_dNQyq4mEx57SgOjJFtD-0hXU",
        authDomain: "myweb-f3be5.firebaseapp.com",
        projectId: "myweb-f3be5",
        storageBucket: "myweb-f3be5.appspot.com",
        messagingSenderId: "1083645557291",
        appId: "1:1083645557291:web:e85ec1f76d44f8ed9dc86e",
        measurementId: "G-1MC4PEGQST"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
//     // Initialize Cloud Firestore through Firebase
//     firebase.initializeApp({
//     apiKey: '### FIREBASE API KEY ###',
//     authDomain: '### FIREBASE AUTH DOMAIN ###',
//     projectId: '### CLOUD FIRESTORE PROJECT ID ###'
//   });
  
  var db = firebase.firestore();

function verify() {
    myReg=/^.+@.+\..{2,3}$/
    if (document.send.n.value=='') {
                alert('請輸入名字');
                return false;
    }
    if(document.send.e.value.match(myReg)){
                return true;
    }else{
                alert('請輸入正確Email');
                return false;
    }
    if(document.send.p.value==''){
                alert('請輸入電話');
                return false;
    }
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
    