## Project Name : MTM Tradus (Inventory Management)

#Live site Link :

## Using Technologies :

ExpressJS, Mongoose, MongoDB, TypeScript, JWT, Zod, bcrypt, vercel etc.

## Challenging Features:

Pagination, Filtering, JTW Token Verify, auth service, Transaction & callback, Zod Validation, Global Error Handler, Instance Methods, Password Hashing, Password Compare, Authentication, and Carefully using typeScript etc.

## USER ENPOINT : (crud operation)

### Create User :

- When we will create user. such as if your password & confirmPassword is not equal so i can not create user.
- when we will see user response, Password does not show . i showed all of data without password
- Zod validation (If you want to create your profile ,you have to fill up all of fields. if don't fill up the any fields you can see zodValidation error)
  (Authentication): It could access only Admins & Yourself.

### GetAllUsers / Filters

- you can filtering, searching, pagination all of users.
- you will be able to show all of users without password
- (Authentication): it could access only Admins.

### Update User

- you can update your profile(userData).
- if The user is not exist they won't be update Data.
- you will be able to show all of users without password
- (Authentication): It could access only Admins & Yourself.
- Zod validation (If you want to create your profile ,you have to fill up all of fields. if don't fill up the any fields you can see zodValidation error)
- i have used dynamic route("/:id")

### Delete User

- you can not Delete your profile(userData).
- if The user is not exist they won't be delete Data.
- (Authentication): It could access only Admins.
- i have used dynamic route("/:id")

## AUTH ENPOINT :

### User Login :

- I have used (bcrypt, JWT-token, Instance-Methods, isUserExist, Password-Compare, Create-accessToken, Create-refreshToken)

### refresh-token User :

----i have tried various Special Features :-----

- Token Verification
- Get Token From Cookies
- Set Token into Cookies
- New AccessToken
- using Zod Validation for Refresh Token.
- when The users finish expireTime , so The users have to use refresh-token route for new accessToken.
  end .

Change User Password :

- Authentication access (if you are not a admin or user so you won't be able to password-change.)
- after finishing token verify we can get user information(userEmail, role).
- i have compared oldPassword and newPassword. i have use bcrypt for compare password.

## Supplier ENPOINT : (crud operation)

### Create Supplier :

- Zod validation (If you want to create your profile ,you have to fill up all of fields. if don't fill up the any fields you can see zodValidation error)
- (Authentication): It could access only Admins.
- Folder structure : modules prettrn

### GetAllSupplier / Filters

- you can filtering all of Supplier.
- you can searching all of Supplier.
- you can pagination all of Supplier.
- (Authentication): it could access only Admins & Yourself.

### GET by ID

- you can get single Supplier using GET Route.
- Dynamic route ("/:id")
- (Authentication): it could access only Admins & Yourself.
-

### Update Supplier

- you can update your Supplier account.
- if The user is not exist they won't be update Data.
- (Authentication): It can access only Admins & Yourself.
- Zod validation (If you want to create your profile ,you have to fill up all of fields. if don't fill up the any fields you can see zodValidation error)
- i have used dynamic route("/:id")

### Delete Supplier

- you can not Delete your Suppler Account.
- if The Suppler is not exist they won't be delete Data.
- (Authentication): It can access only Admins.
- i have used dynamic route("/:id")

## Implement Brand : (Read, insert , update, GetById Delete, filtering, pagination and Zod validation)

### Create Brand : Only Access Admin

route : /api/v1/brands/create-brand (POST)

Discuss: i have embed from supplier Schema here. i have checked supplier . if The Supplier is not found , i have responded a error-message.

### Get All Brand and Filters:

route : /api/v1/brands/ (GET)

### Get By Brand:

route : /api/v1/brands/:id (GET)

### UPDATE Brand :

route : /api/v1/brands/:id (PATCH)
-- if The Brand is not found , i have responded a error-message.

### DELETE Brand :

route : /api/v1/brands/:id (DELETE)

## Implement Product : (Read, insert , update, GetById Delete, filtering, pagination and Zod validation)

### Create Product : Only Access Admin

route : /api/v1/products/create-product (POST)
