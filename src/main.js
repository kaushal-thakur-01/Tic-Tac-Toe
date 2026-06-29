const box = document.getElementsByClassName("box")
const h1 = document.getElementsByTagName("h1");
const rstbtn = document.getElementById("rstbtn");

starGame(); 
// for (const boxes of box) {
//   boxes.addEventListener("click", () => {
//     boxes.innerHTML = "Hello";
//   });
// }
    let currentTarget ='x'
    let gameOver = false;
    let count =0;

    let winingCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    function starGame() {
      for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click", () => {
          // Stop the game if there is already a winner
          if (gameOver) return;
          // Prevent overwriting a box
          if (box[i].innerHTML !== "") return;

          if (box[i].innerHTML === "") {
            box[i].innerHTML = currentTarget;
            count++;
            winner();

            currentTarget = currentTarget === "x" ? "o" : "x";
          }
          if(count===9){
            h1[0].innerText = "Match is draw";
          }
        });
      }
    }




function winner(){
  winingCondition.forEach((item)=>{
    let index0 = item[0]
    let index1 = item[1]
    let index2 = item[2]
    // console.log(index0,index1,index2)
    let val0 = box[index0].innerText
    let val1 = box[index1].innerText
    let val2 = box[index2].innerText
    // console.log(index0,val0 ,index1,val1,index2,val2)
    if(val0!=''&& val1!=''&& val2!=''){
      if(val0===val1&& val0===val2){
        h1[0].innerText=`Winner is ${val0}`
        box[index0].style.backgroundColor="red"
        box[index1].style.backgroundColor="red"
        box[index2].style.backgroundColor="red"
        gameOver=true;
         count=0;
        return;
        // console.log(" ",val0)
      }
    }
  })
}


rstbtn.addEventListener('dblclick',()=>{
  
  for(let items of box){
    items.innerText=''
    items.style.backgroundColor="white"
   
  }
  count=0;

   gameOver = false;      // Reset game
   currentTarget = "x";   // First player starts again
   h1[0].innerText = "Tic Tac Toe";
})