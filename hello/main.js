$(document).ready(function(){

  var canvas = $('canvas')[0];
  var context = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var ball = 0.1;
  var radius = 0.1;
  var wall = 0.9;
  var velocity = 0;
  var dt = 1.0/30.0;

  window.setInterval(function(){

    // Clear canvas
    canvas.width = canvas.width;

    // Physics
    var gravity = 9.8;
    velocity = velocity + gravity * dt;
    ball = ball + velocity * 0.005;

    // Collision
    if ( (ball + radius) > wall){
      ball = wall - radius;
      velocity = -velocity;
    }

    // Ball
    context.beginPath();
    context.arc(0.5 * width, ball * height, width * radius, 0, Math.PI*2);
    context.closePath();
    context.fill();

    // Box
    context.fillRect(0, wall * height, width, (1-wall) * height);
  }, 1000 * dt);

});

