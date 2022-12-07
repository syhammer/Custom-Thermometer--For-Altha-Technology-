function CustomizeObject(thermometer)
{
  // The funding progress (DOLLARS)
  thermometer.funding.progress = 12350;
  // The funding goal (DOLLARS)
  thermometer.funding.goal = 100000;
  // Amount of Donors
  thermometer.donations = 73;

  thermometer.bar.size.inner.x = 30;
  thermometer.bar.size.inner.y = 1600;
  thermometer.bar.size.outer.x = width;
  thermometer.bar.size.outer.y = height;
  thermometer.bar.borderRadius = 10;
  thermometer.bar.marks = 10;
  thermometer.scaler = 4;
}
