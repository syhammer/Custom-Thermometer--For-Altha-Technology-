class Thermometer
{
  constructor()
  {
    this.donations = 0;
    this.funding = {
      progress:0,
      goal:0,
    };
    this.funding.percent = this.funding.progress/this.funding.goal;
    this.bar = {
      size:{
        inner:createVector(),
        outer:createVector()
      },
      borderRadius:0,
      color:color(231,33,121),
      backgroundColor:color(220),
      marks:0,
    };
    this.text = {
      color:{
        light:color(220),
        dark:color(51),
      },
      size:80,
      font:'Helvetica',
    };
    this.scaler = 1;
  }

  render()
  {
    this.funding.percent = this.funding.progress/this.funding.goal;
    push();
    fill(this.bar.backgroundColor);
    noStroke();
    rectMode(CENTER);
    rect(this.bar.size.outer.x/2,this.bar.size.outer.y/2,this.bar.size.inner.x,this.bar.size.inner.y,this.bar.borderRadius);
    var increment = this.bar.size.inner.y/this.bar.marks;
    push();
    for (var i = increment; i < this.bar.size.inner.y; i+=increment)
    {
      var percent = 1-(i/this.bar.size.inner.y);
      var d = 1.75;
      if (i/this.bar.size.inner.y == 0.5)
      {
        d = 1;
      }
      if (percent > this.funding.percent)
      {
        stroke(220-160/d);
        strokeWeight(3/d);
        line(this.bar.size.outer.x/2-this.bar.size.inner.x/d,this.bar.size.outer.y/2-this.bar.size.inner.y/2+i,this.bar.size.outer.x/2+this.bar.size.inner.x/d,this.bar.size.outer.y/2-this.bar.size.inner.y/2+i);
        fill(this.text.color.dark);
        noStroke();
        textAlign(RIGHT,CENTER);
        textSize(this.text.size/1.75);
        textFont(this.text.font);
        text('$'+BeautifyNumber(round(this.funding.goal*percent)),this.bar.size.outer.x/2-this.bar.size.inner.x-10*this.scaler,this.bar.size.outer.y/2-this.bar.size.inner.y/2+i)
      }
    }
    pop();
    fill(this.bar.color);
    rect(this.bar.size.outer.x/2,this.bar.size.outer.y/2+this.bar.size.inner.y/2-this.bar.size.inner.y*this.funding.percent/2,this.bar.size.inner.x,this.bar.size.inner.y*this.funding.percent,this.bar.borderRadius);
    fill(this.bar.color);
    textSize(this.text.size);
    textFont(this.text.font);
    textAlign(CENTER,CENTER);
    var w = textWidth(round(100*this.funding.percent));
    ellipse(this.bar.size.outer.x/2,this.bar.size.outer.y/2+this.bar.size.inner.y/2-this.bar.borderRadius+w*0.8,w*1.6,w*1.6);
    fill(this.text.color.light);
    text(round(100*this.funding.percent),this.bar.size.outer.x/2+2*this.scaler,this.bar.size.outer.y/2+this.bar.size.inner.y/2+this.text.size-this.bar.borderRadius-1*this.scaler);
    textSize(this.text.size/1.75);
    text('%',this.bar.size.outer.x/2-w*0.5-0.1*this.scaler,this.bar.size.outer.y/2+this.bar.size.inner.y/2+this.text.size-this.bar.borderRadius-1*this.scaler);
    fill(this.text.color.dark);
    textSize(this.text.size*0.75);
    textAlign(CENTER,CENTER);
    text('Goal:',this.bar.size.outer.x/2,this.bar.size.outer.y/2-this.bar.size.inner.y/2-this.text.size*1.75)
    textSize(this.text.size);
    text('$'+BeautifyNumber(round(this.funding.goal)),this.bar.size.outer.x/2,this.bar.size.outer.y/2-this.bar.size.inner.y/2-this.text.size*0.75);
    textAlign(LEFT,CENTER);
    text('- $'+BeautifyNumber(round(this.funding.progress)),this.bar.size.outer.x/2+10*this.scaler,this.bar.size.outer.y/2+this.bar.size.inner.y/2-this.bar.size.inner.y*this.funding.percent);
    pop();
  }
}

function BeautifyNumber(number)
{
  var stringified = str(number);
  var s = '';
  var counter = 2;
  for (var i = stringified.length-1; i >= 0; i--)
  {
    s+=stringified[i];
    if (counter == 0 && i != 0)
    {
      counter = 2;
      s+=',';
    } else
    {
      counter--;
    }
  }
  return s.split('').reverse().join('');
}
