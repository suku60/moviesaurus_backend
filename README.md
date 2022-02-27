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



###### Privileges explanation

Level 1 users will be able to explore the database but only level 2 users will be able to create orders. 

Use the level up for having the access to create orders.

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

- Create

- Read / Show

- Update / Modify

- Delete

###### Orders

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