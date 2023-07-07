function menu_openClose(){
    let x = document.body.getAttribute("class");
    if(x == "close") document.body.setAttribute("class","open");
    else document.body.setAttribute("class","close");
}

function validation(){
    let x = document.getElementById("name-surname");
    let y = document.getElementById("email");
    let z = document.getElementById("phone");
    let t = document.getElementById("message");
    
    if(x.value.length != 0 && y.value.length != 0 && z.value.length != 0 && t.value.length != 0) 
        document.getElementById("form").setAttribute("onsubmit","return true");
    
    else 
        document.getElementById("form").setAttribute("onsubmit","return false");
    
    if(x.value.length == 0){
        x.setAttribute("placeholder","*Please fill out this field!");
        x.setAttribute("class","js-placeholder"); 
    }
    
    
    if(y.value.length == 0){
        y.setAttribute("placeholder","*Please fill out this field!");
        y.setAttribute("class","js-placeholder"); 
    }
    
    
    if(z.value.length == 0){
        z.setAttribute("placeholder","*Please fill out this field!");
        z.setAttribute("class","js-placeholder"); 
    }
    
    
    if(t.value.length == 0){
        t.setAttribute("placeholder","*Please fill out this field!");
        t.setAttribute("class","js-placeholder"); 
    }
}

function isNotAvailable() {
    alert("Sorry, this link is not available!");
}