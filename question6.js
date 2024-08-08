//Q6.Describe the purpose and usage of the localStorage and sessionStorage APIs in web development. Give
//suitable examples for each.
//answer-
//The localStorage and sessionStorage APIs are part of the Web Storage API, which allows web applications to store data on the client side. Both are used to persist data but differ in their scope and lifetime.
//
//localStorage
//Purpose:
//
//localStorage provides a way to store data that persists across browser sessions. Data stored in localStorage remains available even after the browser is closed and reopened.
//Usage:
//
//Ideal for storing data that should be available across multiple browsing sessions, such as user preferences or application state.
//API Methods:
//
//localStorage.setItem(key, value): Stores a value associated with a key.
//localStorage.getItem(key): Retrieves the value associated with a key.
//localStorage.removeItem(key): Removes the value associated with a key.
//localStorage.clear(): Clears all data stored in localStorage.
//syntax--
// Store user preference
localStorage.setItem('theme', 'dark');

// Retrieve user preference
const theme = localStorage.getItem('theme');
console.log('Stored theme:', theme); // Output: Stored theme: dark

// Remove user preference
localStorage.removeItem('theme');

// Clear all localStorage data
//localStorage.clear();
//sessionStorage
//Purpose:
//
//sessionStorage provides a way to store data that is only available for the duration of the page session. Data is cleared when the page session ends, which typically means when the browser or tab is closed.
//Usage:
//
//Ideal for storing data that is only relevant to the current session, such as temporary form data or session-specific settings.
//API Methods:
//
//sessionStorage.setItem(key, value): Stores a value associated with a key.
//sessionStorage.getItem(key): Retrieves the value associated with a key.
//sessionStorage.removeItem(key): Removes the value associated with a key.
//sessionStorage.clear(): Clears all data stored in sessionStorage.
//syntax--
// Store temporary form data
sessionStorage.setItem('formData', JSON.stringify({ name: 'John Doe', age: 30 }));

// Retrieve temporary form data
const formData = JSON.parse(sessionStorage.getItem('formData'));
console.log('Form Data:', formData); // Output: Form Data: { name: 'John Doe', age: 30 }

// Remove temporary form data
sessionStorage.removeItem('formData');

// Clear all sessionStorage data
sessionStorage.clear();
