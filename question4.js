//Q4.Compare Promises to callbacks and discuss why Promises are preferred for managing asynchronous
//code.

//answer=>>
//Promises and callbacks are two methods used to handle asynchronous operations in JavaScript.
// While both serve the purpose of managing asynchronous code,
//  Promises offer several advantages over traditional callbacks.
//callbacks=
//A callback is a function passed as an argument to another function that is executed once an asynchronous operation completes.
function fetchData(callback) {
    setTimeout(() => {
      const data = 'Some data';
      callback(null, data); // First argument is an error, second is the data
    }, 1000);
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
    }
  });
 // Issues with Callbacks:

//Callback Hell (Pyramid of Doom):
fetchData((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      processData(data, (error, processedData) => {
        if (error) {
          console.error('Error:', error);
        } else {
          saveData(processedData, (error) => {
            if (error) {
              console.error('Error:', error);
            } else {
              console.log('Data saved successfully');
            }
          });
        }
      });
    }
  });
  Promises
//Definition:

//A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
//It allows you to attach callbacks to handle the result or error of the operation
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data';
        resolve(data); // Resolve with the data
      }, 1000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  //Composition:

//Promises can be composed using methods like Promise.all(),
 //Promise.race(), and Promise.allSettled() to handle multiple asynchronous operations simultaneously.
  
  