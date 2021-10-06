let count = 3;
const intervalID = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }

}, 1000);
