class Thermometer
{
  constructor()
  {
    this.donations = 0;
    this.funding = {
      progress:12350,
      goal:100000,
    };
    this.funding.percent = this.funding.progress/this.funding.goal;
    this.sign = {
      character:'$',
      side:LEFT,
    };
    this.bar = {
      size:{
        inner:createVector(),
        outer:createVector()
      },
      borderRadius:0,
      color:color(231,33,121),
      backgroundColor:color(220),
    };
    this.text = {
      color:{
        light:color(220),
        dark:color(51),
      },
      size:20,
      font:'Roboto',
    };
  }

  render()
  {
    push();
    fill(this.bar.backgroundColor);
    noStroke();
    rectMode(CENTER);
    rect(this.bar.size.outer.x/2,this.bar.size.outer.y/2,this.bar.size.inner.x,this.bar.size.inner.y,this.bar.borderRadius);
    fill(this.bar.color);
    rect(this.bar.size.outer.x/2-this.bar.size.inner.x/2,this.bar.size.outer.y/2,this.bar.size.inner.x*this.funding.percent,this.bar.size.inner.y,this.bar.borderRadius);
    fill(this.bar.color);
    ellipse(this.bar.size.outer.x/2-this.bar.size.inner.x/2+this.bar.size.inner.x*this.funding.percent-this.text.size,this.bar.size.outer.y/2,this.text.size*2);
    fill(this.text.color.light);
    textSize(this.text.size);
    textFont(this.text.font);
    textAlign(CENTER,CENTER);
    text('%'+round(100*this.funding.percent),this.bar.size.outer.x/2-this.bar.size.inner.x/2+this.bar.size.inner.x*this.funding.percent-this.text.size,this.bar.size.outer.y/2);
    pop();
  }
}
