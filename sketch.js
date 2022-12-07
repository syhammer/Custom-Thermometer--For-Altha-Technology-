var thermometer,imageSize;

function setup()
{
  var imageSize = createVector(800,2000);
  createCanvas(imageSize.x,imageSize.y);
  thermometer = new Thermometer();
  CustomizeObject(thermometer);
  thermometer.render();
}

function keyPressed()
{
  if (key == 'Enter')
  {
    save('Thermometer-time:'+getTimestamp()+'.png');
  }
}

function getTimestamp()
{
  return day()+'/'+month()+'/'+year()+'-'+hour()+':'+minute()+':'+second();
}
