# Backend simulation of an online videoclub
***

### **Proyect description**

We are creating a backend that will be able to interact with TheMovieDatabase's API.

You will be able to create your own user in a database, and simulate you are renting a movie for a period of time. 
***


### **How to run tests**

#### ***Dependencies & software needed***


![Software](/img/dependencies.png)

Create a folder and open it in *Visual Studio Code* or your preferred coding software. 
Clone repository from *`https://github.com/suku60/BackendFilmDatabase02-22`*
```bash 
git clone https://github.com/suku60/BackendFilmDatabase02-22
```

First of all, we must install a series of dependencies needed for our proyect using the package manager npm.

Open a new terminal and type:
```bash 
npm i
```

It will auto install all needed dependencies.

Open *MySQL Workbench* and create new schema with the same name as in config.json at *"developement."*

Now you must migrate the database to *MySQL Workench*.

Open a new terminal in *VSC*.

Install sequelize if not done before.

```bash 
npm i sequelize
```

Now migrate your database.

```bash 
npx sequelize db:migrate
```

Run the server with node.js:
```bash 
npm run dev
```

Now you'll be able to read and modify data from *Postman*.



<!-- Sequelieze not needed for user -->


***

### ***Endpoints & Postman testing***


### ***User endpoints***

User data requirements:

`{`

   ` name : <insert name here>` 

   ` birthdate : <insert birthdate here with this format: '1000-01-01 00:00:00'>`

   ` username : <insert username here>`

   ` password : <insert password here>`

   ` email : <insert email here>`
   
`}`


#### - ***create new users***
- ``
http://localhost:3000/users/new``

POST method: create a new user

#### - ***show users***

- ``
http://localhost:3000/users/``

GET method: shows a list of all users


#### - ***modify user data***

##### **JWT or admin privileges needed**

- ``
http://localhost:3000/users/:id`` 

PUT method: modify user data


- ``
http://localhost:3000/users/:id/levelup``

PUT method: level up the user data


#### - ***delete user data***

##### **Admin privileges needed**
- ``
http://localhost:3000/users/``

DELETE method: delete all users
- ``
http://localhost:3000/users/:id``

DELETE method: delete user by id

***

### ***Movies endpoints***

Movie requirements:

`{`

   ` title : <insert title here>` 

   ` year : <insert year here with this format '1000-01-01 00:00:00'>`

   ` adult : <true or false>`

   ` popularity : <insert popularity here>`

   ` image : <insert image here>`
   
   ` description : <insert description here>`
   
`}`


#### - ***add new movies***

- ``
http://localhost:3000/movies/new``

POST method: add a new movie

#### - ***search for a movie***


- ``
http://localhost:3000/movies/``

GET method: shows a list of all movies


- ``
http://localhost:3000/movies/newest``

GET method: show newest movies


- ``
http://localhost:3000/movies/adult``


GET method: show a list of adult movies


#### - ***update movie data***

##### **JWT(user privileges) or admin privileges needed**

- ``
http://localhost:3000/movies/update/:id``

PUT method: update/modify movie data by id.


#### - ***delete movies***

##### **Admin privileges needed**

- ``
http://localhost:3000/movies/delete/all``

DELETE method: delete all movies

- ``
http://localhost:3000/movies/delete/:id``

DELETE method: delete a movie by id

***

### ***Order endpoints***

##### **JWT(user privileges) or admin privileges needed**

Order requirements:

`{`

   ` userId: <insert userIdhere>` 

   ` movieId : <insert movieId here>`

   ` date : <insert date here with this format '1000-01-01 00:00:00'>`

   ` price : <insert price here>`

   ` active : <true or false>`
   
`}`


#### - ***create orders***

- ``
http://localhost:3000/orders/``

GET method: shows a list of all orders

- ``
http://localhost:3000/orders/new``

POST method: create a new order


#### - ***show orders by status or id***

- ``
http://localhost:3000/orders/active ``

GET method: shows a list of all active orders

- ``
http://localhost:3000/orders/:id``

PUT method: update order data


#### - ***delete orders***

- ``
http://localhost:3000/orders/delete/all``

DELETE method: delete all orders

- ``
http://localhost:3000/orders/delete/:id/``

DELETE method: delete an order by id

***
#### ***Level privileges explained***

  

Level 1 users are able to explore our database and to create requests for an order.

Level 2 users will be able to create a maximum of 5 orders every month whenever they want to.

Upgrade to level to paying the monthly suscription
