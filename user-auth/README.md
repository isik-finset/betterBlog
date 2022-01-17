This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1.Install

```
yarn install
```

## 2.Run

```
yarn start
```

# Objective

Provided a default app with two mock apis: `/api/account/login` and `/api/account/user-profile`, you need to authenticate a dummy user then redirect the user to the protected route: `/user-profile` and display user's information.

Steps:

1. Use a Mui textfield component to collect user's email and password, then send a POST request to `/api/account/login` mock api route. When working with forms, don't use any external libraries. Use only state or custom hooks to process user input. Both fields are required and the email field should only accept email as a valid input.
2. Upon a successful response, you will get a jwt token. Refer to the existing jwt util methods inside `utils`. You need to temporarily persist the token in order to fetch user's profile data from `/api/account/user-profile`. It is recommended to use React Context API for this step.
3. Make sure you add a protected route for the `user-profile` that is only accessible for logged in users.

The boilerplate has all packages you need to successfully complete this task. Feel free to use lodash util methods. Be as creative as you can. Good luck.

Reference:

- Login data: email: hong@finset.io, password: 12345
- Mui [docs](https://mui.com/)
- React Router [docs](https://reactrouter.com/docs/en/v6)
- React Context API Typescript [example](https://dev.to/alexander7161/react-context-api-with-typescript-example-j7a)
- Axios [docs](https://github.com/axios/axios)
