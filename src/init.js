// We are going to define a clock that ticks every 3 seconds

const TICK_RATE = 3000;

function tick () {
  console.log("tick", Date.now());
}

async function init () {
  console.log('starting game');

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if(nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame); // calling it the first time
}

init();

// requestAnimationFrame is used to do javascript animations
// its saying to the browser that next time that you are idle, call this function that i am providing to you
