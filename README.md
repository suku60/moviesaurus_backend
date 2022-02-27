## Backend simulation of an online videoclub

### Proyect description

We are creating a backend that will be able to interact with TheMovieDatabase's API.

You will be able to create your own user in a database, and simulate you are renting a movie for a period of time. 


###### Register & Login

Open Postman.
<!-- postman indications here -->
Use the following adress and post method for user creation: 
http://localhost:3000/users/

Send the data as and {object}:
{
    name : name
    birthdate : birthdate
    username : username
    password : password
    <!-- complete as we do it -->
}



###### Privileges (suscription)

Level 1 users are able to explore our database and to create requests for an order.

Level 2 users will be able to create a maximum of 5 orders every month whenever they want to.

Upgrade to level to paying the monthly suscription

##### How to simulate and test from Postman

###### Users

http://localhost:3000/users/
GET method: shows a list of all users
POST method: create a new user

User requirements:
<!--  -->

http://localhost:3000/users/:id
PUT method: modify user data

http://localhost:3000/users/
DELETE method: delete all users

http://localhost:3000/users/:id/levelup
PUT method: level up the user data


###### Movies

http://localhost:3000/movies/
GET method: shows a list of all movies
POST method: add a new movie

Movie requirements:
<!--  -->

http://localhost:3000/movies/:id
PUT method: update movie data.

http://localhost:3000/movies/
DELETE method: delete all movies

http://localhost:3000/movies/:id
DELETE method: delete a movie by id

###### Orders

http://localhost:3000/orders/
GET method: shows a list of all users
POST method: create a new user

User requirements:
<!--  -->

http://localhost:3000/orders/:id
PUT method: modify user data

http://localhost:3000/orders/
DELETE method: delete all users

http://localhost:3000/orders/:id/levelup
PUT method: level up the user data
- Create

- Read / Show

- Update / Modify

- Delete


### How to run

###### Dependencies & software

Create a folder and open it in Visual Studio Code or your preferred coding software. First of all, we must install a series of dependencies needed for our proyect using the package manager npm.

Open a new terminal
type:

`npm init`

`npm i` 

It will auto install all needed dependencies.

<!-- Sequelieze not needed for user -->


###### How to add your own movie to the database