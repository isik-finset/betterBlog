# BetterBlog

## About the Project

The sole purpose of this project was to learn and practice the fundamental concepts of the **frontend** and **backend**, in the context of building a CRUD application. It does not require any prerequisite knowledge of a certain tool or a library, therefore leaving you the option of building your own custom tools and components. 

### Your target should be:

* Build everything from scratch.
* Avoid using third party libraries other than the ones given.
* Be as much creative as you can
* Build a fully functional CRUD app, from front to back.

***

## Built With
> These are the list of libraries and tools you should be using.

|Front End|Back End|Common|
|---------|---------|-----|
|[React.js]() |[Nest.js]()|[TypeScript]()|
|[Material UI]()|[MySQL]() / [MongoDB]()|[Docker]()|
|[Axios]()|[Prisma]()|[Github]()|
|[React Router V6]()|[Passport]() / [JWT]()|[Yarn]()|
***

## Installation
> Before getting started let's clone the repo and install the packages

1. Clone the repo
   ```bash
   # In your machine locate to Desktop and run the following:
   $ git clone https://github.com/isik-finset/betterBlog.git
   ```
2. Install the dependencies
   ```bash
   # cd into the new directory created in your Desktop:
   $ cd betterBlog

   # You will have two folders in here: back-end & front-end
   # cd into front-end
   $ cd front-end

   # install the dependencies for front-end
   $ yarn

   # after you are done cd into back-end
   $ cd ../back-end

   # install the dependencies for back-end
   $ yarn
   ```
***

## Usage
> On you machine you need to run front-end, back-end, as well as give access to db, for the app to fully function.
1. Front-End
   ```bash
   # This will run the front in development mode
   $ yarn start
   ```
2. Back-End
   ```bash
   # This will run the back in development mode
   $ yarn start:dev
   ``` 
3. Docker for Database & Back-end
   ```bash
   # This will create a virtual machine and open ports for back and db
   $ docker compose up -d

   # You can also easily checkout the db through:
   $ npx prisma studio
   ```
Now you can locate to http://localhost:3000 and you will be able to see the app! 
***

## Further Improvements
> There is a lot of room for improvement throughout all parts of the app. I suggest starting small: 

1. Front End
   * Create [Dialogs](https://mui.com/components/dialogs/) to notify the user about a certain action (i.e. when user registers).
   * Improve validation (UX).
   * Improve the quality and performance of the custom hooks in the hooks folder.
   * Work on Guards and make it more efficient.
   * Design could be improved as well.
<br></br>
2. Back End
   * Controllers and Services for both Users and Posts could be readjusted to decrease data redundancy.
   * Add [bcrypt](https://www.npmjs.com/package/bcrypt) to hash the user password

***
## License 
The whole project is [isik-tech](https://isik-tech.com) licensed.

*** 
## Contributors
<a href="https://github.com/islomnumanov/" target="blank"><img src="https://avatars.githubusercontent.com/u/83022212?v=4" width="50" alt="Isik Logo" style="border-radius:50%" /></a>
<a href="https://github.com/isik-finset" target="blank"><img src="https://avatars.githubusercontent.com/u/97070258?v=4" width="50" alt="Isik Logo" style="border-radius:50%" /></a>