# workoAPI

## Getting Started

### Prerequisites

- Node.js
- MongoDB

1. Clone the repository:
   ```https
   git clone https://github.com/Princesolanki138/workoAPI.git
   ```

2.install all dependencies:
npm install

3.Create a .env file and add your configuration:

PORT = 9000
MONGO_URL= mongodb+srv://.......
JWT_SECRET = HDHD76US5

4.Run the application:

npm run server

\***\*API Endpoints\*\***
start with http://localhost:9000

GET /api/v1/worko/getAllUser :->> List all user(authorized only)
GET /api/v1/worko/getuser/:id :->>Get user details(authorized only)
POST /api/v1/worko/user :->> Create user
to create user use this in postman for Testing add your own value  
{
"email":"addemail@gmail.com",
"password":"addYourPassword",
"name" : "Add Your Name",
"age": 23,
"city":"add your city name",
"zipcode":8365037545
}

POST /api/v1/worko/userSignup :->> Login User To get JWT TOKEN
after creating user login with your email and password to get JWT Token
{
"email":"Test2@gmail.com",
"password":"123456789",

}

PUT /api/v1/worko/updateUser/:id :->> Update user(authorized only)
PATCH /api/v1/worko/updateUser/:id :->>> Partially update user(authorized only)
to update The user use this in postman for Testing add your own value  
{
"email":"addemail@gmail.com",
"name" : "Add Your Name",
"age": 23,
"city":"add your city name",
"zipcode":8365037545
}

DELETE /api/v1/worko/deleteUser/:id :->> Soft delete user(authorized only)

**\***Authentication\*\*\*

I have already implemented basic authentication in the `authMiddleware.js`.
were user need a token to excess some routes with authorized only
To get token user must login before accessing those routes

after npm run server make sure you are getting this message
server running on port 9000
MongoDB Connected: ac-fqbkmz3-shard-00-02.krsw8ik.mongodb.net
