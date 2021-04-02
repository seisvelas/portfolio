let hourPos = (hour, min) =>
  5 *  ((hour % 12) + (min / 60))
          
let clockAngle = (hour, min, sec) => {
  let angle = 6 * Math.abs(sec - hourPos(hour, min))
  return Math.min(angle, 360 - angle)
}
