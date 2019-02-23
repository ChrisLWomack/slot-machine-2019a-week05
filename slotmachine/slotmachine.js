// Build a simple slot machine with minimum 5 items per reel and 3 reels -
//  user should be able to bet min or max and have their total update
//
// two buttons
// min and max bet
//
// event listeners for buttons
//
// two functions
//
// have to return 3 random values
// compare and see if their a match
// if they match user  wins
// if the don't match user loses
// if the win money increases times payout
//
// update the dom with new total

// document.getElementById('min').onclick = minBet;
//
// function minBet(reel,items){
//   for(var i=1; i<=reel; i++)
//   var itemNum = Math.ceil(Math.random()*5)
//
//
// }
// function rollDice(x,y){
//   for(var i = 1; i <= x; i++){
//     var zebra = Math.ceil(Math.random() * y)
//     console.log(zebra)
//
//   }
// }

// as user wins and loses bets, for a win update by total money made by min or max multiplier and for a loss subtract value of min or max bet buy in

//
// var reelOne=0,
// reelTwo=0,
// reelThree=0;
//
//
// document.getElementById('min').onclick =minBet;
// document.getElementById('max').onclick =maxBet;
//
// function spinReels(){
//   var reelChoices = [1,2,3,4,5];
//   reelOne=[Math.floor(Math.random()*reelChoices.length)];
//   reelTwo=[Math.floor(Math.random()*reelChoices.length)];
//   reelThree[Math.floor(Math.random()*reelChoices.length)];
// }
//
// function checkReels(){
//   if(reelOne===reelTwo===reelThree)
//   document.getElementById('totalMoney').innerHTML=;
//   else console.log('waste more money');
//
// }
var total=100;
function showReels(reel1, reel2, reel3){
  document.getElementById('reel1').innerHTML=reel1;
  document.getElementById('reel2').innerHTML=reel2;
  document.getElementById('reel3').innerHTML=reel3;
  console.log(reel1, reel2, reel3)

}

document.getElementById('min').addEventListener("click", function(){
//set reel values

  var reel1= spinReel()
  var reel2= spinReel()
  var reel3= spinReel()

  showReels(reel1, reel2, reel3);

console.log(reel1, reel2, reel3)
//conditional to update total value
if(checkReels(reel1,reel2,reel3)){
  total=total+25
}else{
  total=total-1
}
document.getElementById('totalMoney').innerHTML=total;
});

document.getElementById('max').addEventListener("click", function(){
//set reel values
var reel1= spinReel()
var reel2= spinReel()
var reel3= spinReel()

showReels(reel1, reel2, reel3);

  //conditional to update total value
  if(checkReels(reel1,reel2,reel3)){
    total=total+250
  }else{
    total=total-25
  }
  document.getElementById('totalMoney').innerHTML=total;
});
//choose random value for the reel
function spinReel(){

  var choice = Math.random()
  if(choice<=.2){
    choice="dog";
  }else if(choice<=.4){
    choice="cat"
  }else if(choice<=.6){
    choice="hippo"
  }else if(choice<=.8){
    choice="money"
  }else{
    choice="car"
  }

  return choice;
}

function checkReels(reel1,reel2,reel3){
  if(reel1===reel2 && reel1===reel3){
    return true;
  }else{
    return false;
  }
}
// 1 out of 5 ooptions
//return the values


//anotherfunction
//compare all the reels to findout if they are a winner
//return true or false


function minBet(){

}
