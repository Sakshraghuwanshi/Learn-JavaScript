let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true
let runnerAge = 18
if(runnerAge > 18 && registerEarly) {
  raceNumber += 1000

} 
if(runnerAge > 18 && registerEarly){
  console.log(`they will race at 9:30 am. ${raceNumber}`)
} else if(runnerAge > 18 && !registerEarly){
  console.log(`they will race at 11:00 am. ${raceNumber}`)
} else  if( runnerAge < 18){
  console.log(`they will race at 12:30 pm. ${raceNumber}`)
} else {
  console.log(' see the registration desk.')
}

