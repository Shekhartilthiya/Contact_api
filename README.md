#chandrashekhar Tilthiya

# Contectp

Contectp is a simple CRUD application built using Node.js, Express.js, and MongoDB. The application allows users to create, read, update, and delete contacts.

## Features

- Create contact
- Read contact
- Update contact
- Delete contact

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the server using `npm start`

## API Endpoints

### Create Contact

- POST /contacts
- Request Body: {name: String, email: String, phone: String}
- Response: {message: String, contact: Object}

### Read Contact

- GET /contacts/:id
- Request Param: id
- Response: {message: String, contact: Object}

### Update Contact

- PUT /contacts/:id
- Request Param: id
- Request Body: {name: String, email: String, phone: String}
- Response: {message: String, contact: Object}

### Delete Contact

- DELETE /contacts/:id
- Request Param: id
- Response: {message: String}

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
