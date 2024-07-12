let string = "";

let input = document.querySelector("input");

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if(e.target.innerText === "="){
            string = eval(string);
            input.value = string;
          }else if(e.target.innerText === "AC"){
               string = ""
               input.value = string;
          }else if(e.target.innerText === "C"){
            string = ""
            input.value = string;
          }
          else{
            console.log(e.target);
            string = string + e.target.innerText ;
            input.value = string;
  
          }
             
    });
  
});


