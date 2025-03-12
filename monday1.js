const company = "Sam Altman";
function car(model) {
  let currentSpeed = 0;
  function accelerate(to) {
    while ((currentSpeed += to)) {
      currentSpeed++;
    }
  }
  function printModel() {
    console.log(model, "from", company);
  }

  return { accelerate, printModel };
}
const myCar = car("Audi");
myCar.accelerate(30);
