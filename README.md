# Full Stack Development Project - ReadMe

## Architecture

In this full stack project, I worked with two types of frontend development approaches: traditional Express HTML templates and a modern single-page application (SPA) built using Angular. The Express HTML approach was useful for quickly setting up views and server-rendered content, but it involved full page reloads for every user interaction. In contrast, the Angular SPA offered a richer and more seamless user experience by allowing dynamic updates to the browser without reloading the entire page. This made the app feel more responsive and closer to a desktop application in performance and usability. The backend was built using Node.js with Express and used a NoSQL MongoDB database. MongoDB was chosen because of its flexibility in handling data structures that change over time, and its document-based format was a natural fit for storing JSON data exchanged between the client and server.

## Functionality

JSON (JavaScript Object Notation) is a format used for storing and transporting data, and although it looks similar to JavaScript syntax, it is actually language-independent. JSON plays a key role in tying the frontend and backend together—it acts as the bridge that allows Angular to send data to the Express server and receive responses in a consistent, readable format. During development, I found several points in the process where I refactored code to make it more efficient. One example was moving repeated UI logic in Angular into shared components, which allowed me to reuse the same functionality in multiple parts of the app. This not only saved time but made the code easier to maintain and update later. Reusable components are powerful because they reduce redundancy and promote consistency across the application.

## Testing

API testing in a full stack application includes making sure requests and responses are working as expected. This involves checking various endpoints such as GET, POST, and PUT, which correspond to retrieving, creating, and updating data. Each endpoint must be tested to ensure it handles the correct data, returns proper status codes, and fails gracefully when errors occur. Testing becomes more complex when layers of security like JWT (JSON Web Tokens) are added, as endpoints must reject unauthorized access and accept only properly authenticated requests. I tested API endpoints using tools like Postman to simulate frontend requests and verify backend behavior. I also used browser developer tools during frontend testing to monitor network requests and ensure data was flowing correctly between Angular and Express.
