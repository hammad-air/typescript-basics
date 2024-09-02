// var value1 = prompt("Enter Value")
// var value3 = prompt("Enter 2nd Value")

// function myFunction(g1, g2) {
//     return g1 / g2;
// }
// const value = myFunction(g1, g2); // Calling the function
// console.log(value);

window.onload = function() {
  var modal = document.getElementById("customAlert");
  var closeButton = document.getElementById("closeButton");

  modal.style.display = "block";

  closeButton.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};

// function check(value1, value3) {
//     return Number(value1)+ Number(value3)
// }

// // const result = check(value1, value3);
// // document.write(result)
// function linearSearch(array, toFind){

//     for(let i = 0; i < array.length; i++){
//       if(array[i] === toFind) return i;
//     }
//     return -1;
//   }