//getting the classes for the button and the canvas
//and making a vairable called ctx that gets 2d drawing.

const resetbutton = document.getElementsByClassName("resetbutton");
const canvas = document.getElementsByClassName("canvas");
const ctx = canvas.getContext('2d');

//Variables to track mouse movement

let isDrawing = false;
let lastX = 0;
let lastY = 0;

