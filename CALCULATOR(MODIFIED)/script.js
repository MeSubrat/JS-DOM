let display=document.querySelector('#content-display');
let btn=document.querySelectorAll('#button');
let currentDisplay='';
let flag=0;

btn.forEach(button =>{
    button.addEventListener('click',() =>{
        if(button.innerText==='C')
        {
            currentDisplay='';
            display.value=currentDisplay;
            return;
        }
        else if(button.innerText==='=')
        {
            let result=eval(currentDisplay);
            display.value=result;
            currentDisplay=result;
            return;
        }
        else if(button.innerText==='()')
        {
            if(flag===0)
            {
                currentDisplay+='(';
                display.value=currentDisplay;
                flag=1;
            }
            else if(flag===1){
                currentDisplay+=')';
                display.value=currentDisplay;
                flag=0;
            }
        }
        else{
            currentDisplay+=button.innerText;
            display.value=currentDisplay;
        }
    })
})
