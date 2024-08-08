//Q3. What is the same-origin policy in the context of AJAX requests, and how can you work around it?

//answer=>>

//The same-origin policy is a security feature implemented by web browsers to prevent malicious websites from making unauthorized requests to a different domain than the one that served the web page. This policy helps protect users from cross-site request forgery (CSRF) and other types of attacks.
//
//Same-Origin Policy
//Definition: The same-origin policy restricts web pages from making requests to a domain different from the one that served the web page. In other words, a script running on example.com can only make requests to example.com, not to anotherdomain.com.
//
//Origin: An origin is defined by the combination of the protocol (http/https), domain (e.g., example.com), and port (e.g., 80 for HTTP, 443 for HTTPS). Requests are only allowed if they have the same origin.
//
//Working Around the Same-Origin Policy
//To work around the same-origin policy, several techniques can be used:
//
//Cross-Origin Resource Sharing (CORS):
//
//Description: CORS is a standard that allows servers to specify which origins are permitted to access their resources. The server includes specific headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, etc.) in the response to indicate which origins can access the resource.
//Server-Side Configuration: Configure the server to include the appropriate CORS headers in its responses.
// example
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
//JSONP (JSON with Padding):

//Description: JSONP is a technique that involves adding a <script> tag to the DOM with a URL pointing to a server that returns JSON data wrapped in a function call. JSONP is only applicable to GET requests.
//Limitations: JSONP has been largely replaced by CORS due to security concerns and limitations.
//example
//Proxy Server:
//Description: A server-side proxy can be used to make requests to other domains.
// The web application makes a request to the proxy server, 
//which then forwards the request to the target domain and returns the response to the client.
//Example Configuration (Node.js with Express):
const express = require('express');
const request = require('request');
const a= express();

app.get('/proxy/*', (req, res) => {
  const url = req.url.replace('/proxy/', '');
  request(url).pipe(res);
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));
//Server-Side Rendering (SSR):
//
//Description: Server-side rendering involves making API requests on the server side rather than the client side.
// The server fetches the data and renders the HTML before sending it to the client.
//Example: In frameworks like Next.js, 
//API requests are made in server-side functions (getServerSideProps) to avoid CORS issues on the client.