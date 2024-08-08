//Q5. List and briefly explain some common Browser APIs available to JavaScript developers.
//answer-
//JavaScript developers have access to a variety of browser APIs that enable them to interact with web browsers and perform tasks such as manipulating the DOM, handling user input, and accessing hardware features. Here are some common browser APIs:
//
//1. DOM (Document Object Model) API
//Description: Allows interaction with the HTML and XML documents in the browser. It provides methods to manipulate the structure, style, and content of web pages.
//Common Methods:
//document.getElementById(): Selects an element by its ID.
//document.querySelector(): Selects the first element matching a CSS selector.
//element.innerHTML: Gets or sets the HTML content of an element.
//2. Fetch API
//Description: Provides a modern and flexible way to make HTTP requests and handle responses. It is a more powerful and cleaner alternative to XMLHttpRequest.
//Common Methods:
//fetch(url): Initiates a network request to the specified URL.
//.then(): Handles the response from the request.
//.catch(): Handles any errors that occur during the request.
//3. Web Storage API
//Description: Provides mechanisms for storing data in the browser. It includes two main storage options: localStorage and sessionStorage.
//Common Properties/Methods:
//localStorage: Stores data with no expiration time.
//sessionStorage: Stores data for the duration of the page session.
//setItem(key, value): Stores a value.
//getItem(key): Retrieves a value.
//removeItem(key): Removes a value.
//4. Geolocation API
//Description: Allows web applications to access the geographical location of the user’s device.
//Common Methods:
//navigator.geolocation.getCurrentPosition(successCallback, errorCallback): Retrieves the current position.
//navigator.geolocation.watchPosition(successCallback, errorCallback): Watches for changes in position.
//5. Canvas API
//Description: Provides methods to draw graphics and animations on a web page via the <canvas> element.
//Common Methods:
//getContext('2d'): Returns a 2D rendering context for drawing.
//context.beginPath(): Begins a new path.
//context.arc(x, y, radius, startAngle, endAngle): Draws an arc.
//6. WebSockets API
//Description: Enables real-time, full-duplex communication between the browser and a server over a single, long-lived connection.
//Common Methods:
//new WebSocket(url): Creates a new WebSocket connection.
//socket.send(message): Sends data to the server.
//socket.onmessage: Event handler for receiving messages.
//7. Notification API
//Description: Allows web applications to display system notifications to the user.
//Common Methods:
//Notification.requestPermission(): Requests permission to show notifications.
//new Notification(title, options): Creates and shows a notification.
//8. WebRTC API
//Description: Provides real-time communication capabilities, including audio, video, and data sharing between browsers.
//Common Methods:
//navigator.mediaDevices.getUserMedia(constraints): Requests access to media devices.
//RTCPeerConnection: Manages connections between peers for media streaming.
//9. Service Worker API
//Description: Allows the creation of background scripts that can intercept network requests, cache resources, and enable offline capabilities.
//Common Methods:
//navigator.serviceWorker.register(): Registers a new service worker.
//self.addEventListener('fetch', eventHandler): Listens for fetch events to handle requests.
//10. IndexedDB API
//Description: Provides a low-level API for storing large amounts of structured data in a client-side database.
//Common Methods:
//indexedDB.open(dbName): Opens or creates a database.
//transaction.objectStore(storeName): Accesses an object store within a transaction.
//objectStore.add(data): Adds data to an object store.