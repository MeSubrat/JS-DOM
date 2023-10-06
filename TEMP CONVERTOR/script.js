const btn=document.getElementById("button");
function convertCel()
{
    let inputVal=parseFloat(document.getElementById("cel-value").value);
    if(!isNaN(inputVal))
    {
        
        const res=inputVal+273.15;
        document.getElementById("cel-res").value=res;
    }
    else
    {
        document.getElementById("res-line").innerHTML="Enter a valid number";
    }
}
const clear=document.getElementById("clear");
clear.addEventListener("click",function(){
    document.getElementById("cel-res").value=0;
    document.getElementById("cel-value").value=0;
})
btn.addEventListener("click",convertCel);