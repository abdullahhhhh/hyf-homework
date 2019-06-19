const travelInformation = {
    speed: 50,
    destinationDistance: 400,
  };
  

function calculateTime(info){
    const speed = info.speed;
    const distance = info.destinationDistance;

    const time = distance / speed;
    const hour = Math.floor(time);
    const minutes = Math.floor(((distance % speed)/speed) *60);
    return hour + " hours" + minutes +" mintues";
}
const travelTime = calculateTime(tr  avelInformation);
console.log(travelTime);
