const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNumber = +counterEl.innerText;
    const data = counterEl.getAttribute("data-ceil");
    const increment = data / 24;
    currentNumber = Math.ceil(currentNumber + increment);

    if (currentNumber < data) {
      counterEl.innerText = currentNumber;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = data;
    }
  }
});