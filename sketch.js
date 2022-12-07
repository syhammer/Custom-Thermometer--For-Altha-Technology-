var thermometer,imageSize;

function setup()
{
  var imageSize = createVector(350,200);
  createCanvas(imageSize.x,imageSize.y);
  thermometer = new Thermometer();
  CustomizeObject(thermometer);
  thermometer.render();
}
