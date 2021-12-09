let pageon=[]

function placeholder(){
    const user= JSON.parse(localStorage.getItem("details"))
    if (user){

    }
}

function SubmitHandler(){
    event.preventDefault();
    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const details = JSON.parse(localStorage.getItem("details"))
    let login = details.length;

    let isEmailAlreadyExist = false;

    for(i=0;i<login;i++){
    let a = details[i].email;
    let user_pass=details[i].password;
        if(email == a && password==user_pass) 
        {
            isEmailAlreadyExist = true;
            break;
            
        }
        
    }

    
    if(isEmailAlreadyExist){
        // window.location.href ="../index.html";
    }
    else{
        alert("error");
    }
    

}