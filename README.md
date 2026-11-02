
# Intro to Backend

A beginner backend development project built using Node.js,
Express.js and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- dotenv
- Nodemon

## Features

### User APIs
- Register User
- Login User
- Logout User

### Post APIs
- Create Post
- Get All Posts
- Update Post
- Delete Post

## Installation

1. Clone the repository.
2. Install dependencies:

   npm install

3. Create a .env file in the root directory.

4. Add the following environment variables:

   PORT=8000
   MONGODB_URI=your_mongodb_connection_string

5. Start the development server:

   npm run dev

## API Endpoints

### User Routes

POST /api/v1/users/register

POST /api/v1/users/login

POST /api/v1/users/logout

### Post Routes

POST /api/v1/posts/create

GET /api/v1/posts/getPosts

PATCH /api/v1/posts/update/:id

DELETE /api/v1/posts/delete/:id

## Testing

All APIs can be tested using Postman.

## Author

Backend Tutorial Project
