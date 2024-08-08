//Q1. Define XMLHttpRequest object, and How is it used in AJAX?
//            Answer of question number 1

//Definition:
//XMLHttpRequest: An API provided by browsers to send HTTP requests to a server and handle responses, which is useful for building dynamic web applications.
//Key Features:
//Asynchronous Communication: It allows sending requests and receiving responses asynchronously, so the web page doesn't need to reload or block while waiting for the server's response.

//Supports Various Data Formats: Although originally designed to handle XML, XMLHttpRequest can handle other data formats like JSON, HTML, or plain text.

//Event-Driven: It has built-in events like onreadystatechange to handle changes in request states and responses.

//How It Is Used in AJAX:
//Creating an Instance: Create a new XMLHttpRequest object.
//Configuring the Request: Specify the type of request (GET, POST, etc.) and the URL of the server endpoint.
//Sending the Request: Send the request to the server.
//Handling the Response: Define how to handle the server's response, typically through the onreadystatechange event or onload event.
//Example=>
    // Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the type of request (GET), the URL, and whether it should be asynchronous (true)
xhr.open('GET', 'https://api.example.com/data', true);

// Set up a function to handle the response when it is received
xhr.onreadystatechange = function () {
  // Check if the request is complete and successful
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON response (if the response is JSON)
    const data = JSON.parse(xhr.responseText);
    
    // Do something with the data (e.g., display it on the page)
    console.log(data);
  }
};

// Handle errors (optional)
xhr.onerror = function () {
  console.error('An error occurred during the request.');
};

// Send the request
xhr.send();

