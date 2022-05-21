//Debouncing in JavaScript

let counter = 0;
const getData = () => {
  console.log("Fetching Data", counter++);
};

function debounce(callback, delay, immediate = false) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    const shouldCallImmediately = timerId == null && immediate;
    if (shouldCallImmediately) {
        
      callback.apply(this, args);
    }
    timerId = setTimeout(() => {
      if (!immediate) {
        
        callback.apply(this, args);
      }
      timerId = null;
    }, delay);
  };
}

const betterFunction = debounce(getData , 300)
const arr = [8,5, 2,9,5,6,3]
console.log(arr.sort((a, b) => a -b))