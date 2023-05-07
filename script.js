console.log("hadaro");
let menu= document.querySelector("button");
let cancel=document.querySelector('#close');
let aside=document.querySelector('aside')
let display=false
let removed=false
menu.addEventListener(
    "click",
    ()=>{
        display=!display
        if(display){
            console.log("it is true")
            aside.className="drop navlength"
            menu.className="close"
        }
        else{
            console.log("it is false")
            console.log('clicked')
            aside.className="clear navlength"
            menu.className=""
    }
    }
);

cancel.addEventListener(
    "click",
    ()=>{
        removed=!removed
       if(removed){
            console.log('clicked')
            aside.className="clear navlength"
            menu.className=""
            removed=false
            display=false
       }
       else{
        console.log("flat")
       }
    }
    )


