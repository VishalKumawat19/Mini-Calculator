
const audio = new Audio("sounds/shooting-sound-fx-159024.mp3");
const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");


let displayedContent = "";
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    audio.play();
    const text = e.target.innerText;
    displayedContent =displayedContent+text;
    console.log(displayedContent);
    if (displayedContent.length>=16){
      alert("count has reached to maximum digits ! Please clear some digits.");

    }

    if (e.target.innerText=="Del"){
      decrementDigits();

    }
    
    if (e.target.innerText=="AC"){
       output.innerText="";
       displayedContent="";
        
       } else if (e.target.innerText=="="){
        evaluateValue();

      } 
      
      else{

        output.innerText=displayedContent;
      }
    
  }

  
  );
});

function evaluateValue() {
  let evaluatedValue = eval(output.innerText)
  output.innerText= evaluatedValue;
  displayedContent=evaluatedValue;
}

function decrementDigits(){
  displayedContent=displayedContent.replace('Del','');
  displayedContent=displayedContent.slice(0,-1);
  output.innerText=displayedContent;
}

