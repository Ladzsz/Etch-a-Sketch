//Event listener to control the whole script

document.addEventListener('DOMContentLoaded', () => {
    
    //getting the canvas and button as well as
    //making the rows and collums.
    const canvas = document.getElementById('canvas'); 
    const resetButton = document.getElementById('resetbutton'); 
    const rows = 10; 
    const cols = 10; 
  
    //Creating the grid
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div'); 
      cell.classList.add('cell'); 
      canvas.appendChild(cell); 
  
      //adding event listener for drawing on mousedown
      cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = 'black'; 
      });
  
      // Add event listener for drawing on mouseenter to ensure smooth drawing across
      //cells
      cell.addEventListener('mouseenter', (e) => {
        if (e.buttons === 1) { 
          cell.style.backgroundColor = 'black'; 
        }
      });
    }
  
    //Adding event listener for reset button by making all backround color white
    resetButton.addEventListener('click', () => {
      const cells = canvas.querySelectorAll('.cell'); 
      cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; 
      });
    });
  });
  