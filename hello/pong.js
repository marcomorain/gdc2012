window.onload = function(){

  // Grab the canvas
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var ball = 0.1;
  var radius = 0.1;
  var wall = 0.9;
  var velocity = 0;
  var dt = 1.0/30.0;
  var scale = 0.005;

  // Keep track of the bat's x position
  // and width
  var bat = 0;
  var bat_width = 0.2;

  // When the mouse moves on the canvas
  // move the bat with it
  canvas.onmousemove = function(event){
    bat = event.clientX / width;
  };

  // Set a callback
  window.setInterval(function(){

    // Clear canvas
    canvas.width = canvas.width;

    // Physics
    var gravity = 9.8;
    velocity = velocity + gravity * dt * scale;
    ball = ball + velocity;

    // Collision
    // Need to account for bat x-position
    if ( (ball + radius) > wall &&
          (bat - bat_width) < 0.5 &&
          (bat + bat_width) > 0.5) {
      ball = wall - radius;
      velocity = -velocity;
    }

    // If the ball falls below the bat
    // reset the ball
    if (ball > 1){
      ball = 0.1;
      velocity = 0;
    }

    // Ball
    context.beginPath();
    context.arc(0.5 * width, ball * height, width * radius, 0, Math.PI*2);
    context.closePath();
    context.fill();

    // Bat
    context.fillRect((width * bat) - (bat_width * 0.5),
                     wall * height,
                     bat_width * width,
                     (1-wall) * height);
  }, 1000 * dt);

}

