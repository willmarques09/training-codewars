//Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  } else {
    return "yellow";
  }
}
