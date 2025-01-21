function show(value){
    let result=document.getElementById("result")
    result.value += value;
     }
       function solve(){
         let result=document.getElementById("result")
         let answer= eval(result.value)
         result.value=answer;
       }
      function clearScreen(){
       result.value="";
      }