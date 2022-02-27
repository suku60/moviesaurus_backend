# Backend simulation of an online videoclub
***

### **Proyect description**

We are creating a backend that will be able to interact with TheMovieDatabase's API.

You will be able to create your own user in a database, and simulate you are renting a movie for a period of time. 
***


### **How to run**

#### ***Dependencies & software needed***

Create a folder and open it in *Visual Studio Code* or your preferred coding software. 
Fork from *`https://github.com/suku60/BackendFilmDatabase02-22`*

First of all, we must install a series of dependencies needed for our proyect using the package manager npm.

Open a new terminal
type:

`npm init`

`npm i` 

It will auto install all needed dependencies.

<!-- Sequelieze not needed for user -->


***

### ***Endpoints & Postman testing***


### ***User endpoints***

User data requirements:

`{`

   ` name : <insert name here>` 

   ` birthdate : <insert birthdate here>`

   ` username : <insert username here>`

   ` password : <insert password here>`

   ` email : <insert email here>`
   
`}`


#### - ***create and show users***
``
http://localhost:3000/users/``

GET method: shows a list of all users

POST method: create a new user


#### - ***modify user data***

##### **JWT or admin privileges needed**

``
http://localhost:3000/users/:id`` 

PUT method: modify user data


``
http://localhost:3000/users/:id/levelup``

PUT method: level up the user data


#### - ***delete user data***

##### **Admin privileges needed**
``
http://localhost:3000/users/``

DELETE method: delete all users
``
http://localhost:3000/users/:id``

DELETE method: delete user by id

***

### ***Movies endpoints***

Movie requirements:

`{`

   ` title : <insert title here>` 

   ` year : <insert year here>`

   ` adult : <true or false>`

   ` popularity : <insert popularity here>`

   ` image : <insert image here>`
   
   ` description : <insert description here>`
   
`}`


#### - ***search and add new movies***

``
http://localhost:3000/movies/``

GET method: shows a list of all movies

POST method: add a new movie


``
http://localhost:3000/movies/newest``

GET method: show newest movies


``
http://localhost:3000/movies/adult``


GET method: show a list of adult movies


#### - ***update movie data***

##### **JWT(user privileges) or admin privileges needed**

``
http://localhost:3000/movies/:id``

PUT method: update/modify movie data by id.


#### - ***delete movies***

##### **Admin privileges needed**

``
http://localhost:3000/movies/``

DELETE method: delete all movies

``
http://localhost:3000/movies/:id``

DELETE method: delete a movie by id

***

### ***Order endpoints***

##### **JWT(user privileges) or admin privileges needed**

``
http://localhost:3000/orders/``

GET method: shows a list of all orders

POST method: create a new order

``
http://localhost:3000/orders/active ``

GET method: shows a list of all active orders

Order requirements:

`{`

   ` userId: <insert userIdhere>` 

   ` movieId : <insert movieId here>`

   ` date : <insert date here>`

   ` price : <insert price here>`

   ` active : <true or false>`
   
`}`
``
http://localhost:3000/orders/:id``

PUT method: update order data

``
http://localhost:3000/orders/``

DELETE method: delete all orders

``
http://localhost:3000/orders/:id/``

DELETE method: delete an order by id

***
#### ***Level privileges explained***

  

Level 1 users are able to explore our database and to create requests for an order.

Level 2 users will be able to create a maximum of 5 orders every month whenever they want to.

Upgrade to level to paying the monthly suscription
