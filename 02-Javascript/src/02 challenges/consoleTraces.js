setTimeout(() => console.log("******** CHALLENGE: consoleTraces ***********"), 80);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = triggers => {
  let timeout = 0;
  triggers.forEach(t => setTimeout(t, timeout) && (timeout += 200));
  setTimeout(() => console.log("first"), timeout);
};

run(triggers);