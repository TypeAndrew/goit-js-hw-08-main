import throttle from 'lodash.throttle';
 
   
 function CreateState(typeEl,valueEl) {
     
     
     settings = JSON.parse(localStorage.getItem("feedback-form-state"));
     if (settings === null) {
         settings = {
             name: "",
             message: ""
         };  
    }
     
    if (typeEl === 'email') {
        settings.email = valueEl;
        console.log(typeEl);
    }    
     if (typeEl === 'textarea') {
        settings.message = valueEl;
        console.log(typeEl);
    }   
    
    localStorage.setItem("feedback-form-state", JSON.stringify(settings));
    console.log(settings);
}


let getEl = (selector) => document.querySelector(selector);
getEl('.feedback-form').addEventListener('input', throttle(()=> {
    if (event !== undefined) {
        console.log(event.target);
        typeEL = event.target.type;
        valueEl = event.target.value;

        
        // console.log(typeEL);
        CreateState(typeEL,valueEl);
        }   
    
},500));

let getStoreValues = function() {
   // console.log(event.target);
    console.log('!!!!!!');
    settings = localStorage.getItem("feedback-form-state"); 
    let parsedSettings = JSON.parse(settings);

    let getEl = (selector) => document.querySelector(selector);
    getEl("input[name=email]").value = parsedSettings.email;
    getEl("textarea[name=message]").value = parsedSettings.message;
  
    }
window.addEventListener('load', getStoreValues)



console.log(throttle);