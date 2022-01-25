base_URL: http://localhost:5000


# AUTH

1. ## LOGIN
 - QUERY: POST: /auth/login
 - BODY: {
    "email": "fibonacci@finset.io",
    "password": "1111"
}

######################################################################

# USER

1. ## REGISTER A USER
 - QUERY: POST: /user/signup
 - BODY: {
    "firstName": "Don",
    "lastName": "Fibonacci",
    "email": "fibonacci@finset.io",
    "password": "1111"
}

2. ## GET A SINGLE USER
 - QUERY: GET: /user/:id
 - HEADER: Authentication: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNjQzMTA5NjQwLCJleHAiOjE2NDMxMTAyMDB9.iNdhw-dNUTIizXDN0MIYAE4AnSSSEDRFaxbLgt_wmPk

3. ## GET ALL USERS
 - QUERY: GET: /user


4. ## GET A SINGLE USER'S ALL POSTS
 - QUERY: GET: /user/:id/posts
 - HEADER: Authentication: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNjQzMTA5NjQwLCJleHAiOjE2NDMxMTAyMDB9.iNdhw-dNUTIizXDN0MIYAE4AnSSSEDRFaxbLgt_wmPk


######################################################################

# POSTS

1. ## GET ALL POSTS
 - QUERY: GET: /posts

2. ## GET A SINGLE POST
 - QUERY: GET: /posts/:id

3. ## CREATE A NEW POST
 - QUERY: POST /posts/create
 - HEADER: Authentication: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNjQzMTEwMjcyLCJleHAiOjE2NDMxMTA4MzJ9.X2saltsniSgIAyHFHbLVU0imw02sfaDkGBedoPLBHHY
 - BODY: {
    "title": "Second Testing",
    "description": "Something",
    "body": "three exceedingly difficult tasks.",
    "topic": "Fantasy, Adventure",
    "authorId": 2,
    "firstName": "Mark",
    "lastName": "Walberg"
}

4. ## UPDATE A POST
 - QUERY: PATCH /posts/:id
 - HEADER: Authentication: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNjQzMTEwMjcyLCJleHAiOjE2NDMxMTA4MzJ9.X2saltsniSgIAyHFHbLVU0imw02sfaDkGBedoPLBHHY
 - BODY: {
    "title": "Second Testing",
    "description": "Something",
    "body": "three exceedingly difficult tasks.",
    "topic": "Fantasy, Adventure",
}

5. ## DELETE A POST
 - QUERY: DELETE /posts/:id
 - HEADER: Authentication: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzIiwiaWF0IjoxNjQzMTEwMjcyLCJleHAiOjE2NDMxMTA4MzJ9.X2saltsniSgIAyHFHbLVU0imw02sfaDkGBedoPLBHHY



