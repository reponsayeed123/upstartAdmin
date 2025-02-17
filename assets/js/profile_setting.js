const firebaseConfig = {
    apiKey: "AIzaSyDEnMLF07ECniElRqP_qt8MChbtQ4QXLMQ",
    authDomain: "upstart-5cd95.firebaseapp.com",
    databaseURL: "https://upstart-5cd95-default-rtdb.firebaseio.com",
    projectId: "upstart-5cd95",
    storageBucket: "upstart-5cd95.firebasestorage.app",
    messagingSenderId: "659195448409",
    appId: "1:659195448409:web:a8c43ea97d8edb91697548"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
    var alluser = firebase.database().ref().child("admin").child('user');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
  

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('user').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  