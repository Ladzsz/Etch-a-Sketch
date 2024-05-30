document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas'); 
    const resetButton = document.getElementById('resetbutton'); 
    const rows = 10; 
    const cols = 10; 
  
    // Create the grid
    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement('div'); 
      cell.classList.add('cell'); 
      canvas.appendChild(cell); 
  
      // Add event listener for drawing on mousedown
      cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = 'black'; 
      });
  
      // Add event listener for drawing on mouseenter (if the left mouse button is held down)
      cell.addEventListener('mouseenter', (e) => {
        if (e.buttons === 1) { 
          cell.style.backgroundColor = 'black'; 
        }
      });
    }
  
    // Add event listener for reset button
    resetButton.addEventListener('click', () => {
      const cells = canvas.querySelectorAll('.cell'); 
      cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; 
      });
    });
  });
  