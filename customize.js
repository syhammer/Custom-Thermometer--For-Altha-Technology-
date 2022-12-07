function CustomizeObject(thermometer)
{
  // The funding progress (DOLLARS)
  thermometer.funding.progress = 12350;
  // The funding goal (DOLLARS)
  thermometer.funding.goal = 100000;
  // Amount of Donors
  thermometer.donations = 73;

  thermometer.bar.size.inner.x = 10;
  thermometer.bar.size.inner.y = 300;
  thermometer.bar.size.outer.x = width;
  thermometer.bar.size.outer.y = height;
  thermometer.bar.borderRadius = 5;
  thermometer.bar.marks = 10;
}
