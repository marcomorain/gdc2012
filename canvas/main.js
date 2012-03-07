window.onload = function(){

var image = new Image();
image.onload = function(){
  var canvas = document.createElement('canvas');
  canvas.width  = image.width;
  canvas.height = image.height;

  var context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);

  var i,j;

  var pixels = context.getImageData(0, 0, image.width, image.height);
  for (i=0; i<image.width; i++){
    for(j=0; j<image.height; j++){
      pixels.data[i+(j*image.width)];
    }
  }
}
image.src = 'http://www.html5rocks.com/static/images/identity/html5-badge-h-graphics.png';

};

