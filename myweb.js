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
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

function connectdb(n,e,p,meg){ 
  var db = firebase.firestore();
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

// function verify() {
//     myReg=/^.+@.+\..{2,3}$/
//     if (document.send.n.value=='') {
//                 alert('請輸入名字');
//                 return false;
//     }else{
        
//     }
//     if(document.send.e.value.match(myReg)){
//                 return true;
//     }else{
//                 alert('請輸入正確Email');
//                 return false;
//     }
//     if(document.send.p.value==''){
//                 alert('請輸入電話');
//                 return false;
//     }
      
// }
// console.log(flag);  
// if (flag==3){
//     connectdb(document.send.n.value,document.send.e.value,document.send.p.value,document.send.m.value)
// }

const name2 = document.getElementById('n')
const email = document.getElementById('e')
const phone = document.getElementById('p')
const mes = document.getElementById('m')
const submit = document.getElementById('sub')

function verify(){
    myReg=/^.+@.+\..{2,3}$/
    if (name2.value=="") {
                alert('請輸入名字');
                return false;
    }
    else if(!email.value.match(myReg)){
                alert('請輸入正確Email');
                return false;
    }
    else if(phone.value==""){
                alert('請輸入電話');
                return false;
    }else{
        return true
    }
}

submit.addEventListener('click',function(){

if(verify()){
    var db = firebase.firestore();
    db.collection("mywebdata").add({
      name: name2.value,
      email: email.value,
      phone: phone.value,
      message:mes.value
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert('您已成功送出');
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}
})