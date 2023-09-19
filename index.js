function scuberGreetingForFeet(rideDistance) {
  // Write your code here!
  let response;
  if (rideDistance <=400) {
    response = "This one is on me!";
  }
  if (rideDistance > 2000) {
    response = "i will gladly take your thirty bucks.";
  }

if (rideDistance > 2500) {
  response = "No can do.";
}
return response;
}

//else statement for city selection
function ternaryCheckCity(cityName) {
  let feedback;
  if (cityName === "NYC") {
    feedback= "ok, sounds good.";
  } else {
    feedback = "no go.";
  }
  return feedback;
}

// Switch case for tips
function switchOncharmFromTip(tipAmount) {
let reply;
switch (tipAmount) {
  case "generous":
    reply = "Thank you so much.";
    break;
    case "not as generous":
      reply = "Thank you.";
      break;
      default:
        reply = "Bye.";
}
return reply;
}

