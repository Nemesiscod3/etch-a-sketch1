const CurrentDiv = document.querySelector('#container');
const Squarebtn = document.querySelector('#btn')
const colordivs = document.querySelector('colums')
let numberofsquares 

Squarebtn.addEventListener('click', () => {
 
    
    numberofsquares = prompt("how many squares per side (limit is 100)")
    generatedivs(numberofsquares);
    cleardivs();
});


let generatedivs = function (numberofsquares) {

for (let i = 0; i <= numberofsquares; i++) {

  let rowdivs = document.createElement('div');
      rowdivs.classList.add('rows');
      CurrentDiv.appendChild(rowdivs);
      for (let i = 0; i <= numberofsquares; i++) {            
      let columdivs = document.createElement('div')
      columdivs.addEventListener('mouseover', () => {

        columdivs.style.backgroundColor = "black"
     });
         columdivs.style.background = "white"
         columdivs.style.border = " 1px solid grey"
         columdivs.classList.add('colums');
         rowdivs.append(columdivs)
      console.log(columdivs)

      }   

}
}


let defualtgrid = 16
generatedivs(defualtgrid);



function cleardivs(){

CurrentDiv.textContent = ""
generatedivs(numberofsquares)



}
