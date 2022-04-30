     username = document.getElementById('username');
     email = document.getElementById('email');
     Password = document.getElementById('Password');
     btn =document.getElementById('btn');

   let data;
  if(localStorage.person!=null){
      data=JSON.parse(localStorage.person);
  }else{
      data=[];
  }
  
      
        
function getout(){
  
   document.getElementById ("form").action = "index.html";
    document.getElementById("form").submit();
   
    
}

  
function signup(){
    
    btn.onclick=function(){
        let person ={
            email:email.value,
            password:Password.value,
            username:username.value
        }
        
        data.push(person);
        localStorage.setItem('person',JSON.stringify(data));
        
    }
}


function yt(){
  
  temp = JSON.parse(localStorage.user_login);
for(b=0;b<data.length;b++){
if(temp.email===data[b].email && temp.Password==data[b].password){
    document.getElementById('loginplace').style.display='none';
    document.getElementById('profile1').style.display='block';
    document.getElementById('place').style.display='block';
    break;
  }else{
    document.getElementById('loginplace').style.display='block';
    document.getElementById('place').style.display='none';
    document.getElementById('profile1').style.display='none';
    
  }
}
}



function ahmed(){
    
    document.getElementById('place').style.display='none';
    document.getElementById('profile1').style.display='none';
    document.getElementById('loginplace').style.display='block';
   localStorage.removeItem('user_login'); 
 }
 
 

function profile(){
  temp = JSON.parse(localStorage.user_login);
for(s=0;s<data.length;s++){
    if(temp.email===data[s].email && temp.Password==data[s].password){
        usernam.value="username : " + data[s].username;
        email1.value="email : " + data[s].email;
      }
    }
}

     function signin(){
     
      let  email_1 = document.getElementById('Emailaddress-form').value;
      let pass_login  = document.getElementById('Password-form').value;
      localStorage.user_login =JSON.stringify({
          email : email_1,
          Password:pass_login,
      })
      
        temp = JSON.parse(localStorage.user_login);
      let n=0;
      for (x=0 ;x<data.length;x++){
          
        if(temp.email===data[x].email && temp.Password==data[x].password){
              getout();
               break;    
        }else{
            n++; 
        }
        if(n==data.length){
            alert('wrong email or password');   
        } 
      }    
}




















//temp = JSON.parse(localStorage.user_login);
// if(temp.email==null && temp.password==null){
// temp.email='ahmed';
// temp.password='null';
// console.log(temp.email);
// }