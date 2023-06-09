# Social Media API
### This API provides functionality for a social media app, including user registration, post creation, like and commenting.

## User
### POST `/api/register`
#### This endpoint will register user with name, email and hashed password.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
name     |    string | yes     | user's name.
email    |   string  | yes     | user's email address.
password | string    | yes     | user's password.

### Response 
status code : 201
message : Registered
error: false

### GET `/api/users`
#### This endpoint will return all users.
### Response 
status code : 200
`{
  "message": [
    {
      "_id": "644d19c02dc0f82745ccb462",
      "name": "Ironman",
      "email": "tony@",
      "password": "$2b$10$qckBxQwk6Wm1Mx8o5UXAqO7hG6.D1V1jMgPHjncXsjdUj2J.Jazoy",
      "dob": "1999-12-31T18:30:00.000Z",
      "bio": "He is an avenger in marvel.",
      "posts": [],
      "friends": [
        "644d1a382dc0f82745ccb464"
      ],
      "friendRequests": [],
      "createdAt": "2023-04-29T13:21:04.545Z",
      "updatedAt": "2023-04-29T14:25:08.453Z",
      "__v": 0
    },
    {
      "_id": "644d1a382dc0f82745ccb464",
      "name": "Thor",
      "email": "chris@",
      "password": "$2b$10$VTi2tHh1F8vIJRNeiZlos.Y0BqYEmC50uqoRPU1okFvQhheIP1mmW",
      "dob": "2000-12-31T18:30:00.000Z",
      "bio": "He is a citizen of asguard",
      "posts": [],
      "friends": [],
      "friendRequests": [],
      "createdAt": "2023-04-29T13:23:04.445Z",
      "updatedAt": "2023-04-29T13:23:04.445Z",
      "__v": 0
    }],
  "error": false
}`

### GET `/api/users/:id/friends`
#### This endpoint will return all friends of specified user.
### Response 
status code : 200
`{
  "message": [
    {
      "_id": "644d19c02dc0f82745ccb462",
      "name": "Ironman",
      "friends": [
        {
          "_id": "644d1a382dc0f82745ccb464",
          "name": "Thor"
        }
      ]
    }
  ],
  "error": false
}`

### POST `/api/users/:id/friends`
#### This endpoint will allow user to send friend request to specified user.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
userId   |   string  | yes     | request sender's id.

### Response 
status code : 201
message : Request send
error: false

### PATCH `/api/users/:id/friends/:friendId`
#### This endpoint will allow user to accept or reject friend request of specified friend.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
status   |   string  | yes     | accept or reject.

### Response 
status code : 204
message : Request accepted/rejected
error: false

## Post

### GET `/api/posts`
#### This endpoint will return all posts.
### Response 
status code : 200
`{
  "message": [
    {
      "_id": "644e12d72b115461576fd1d4",
      "user": "644d1a382dc0f82745ccb464",
      "text": "Hey I am Thor. Do you know me?",
      "image": "https://c4.wallpaperflare.com/wallpaper/375/342/535/thor-chris-hemsworth-men-mjolnir-wallpaper-preview.jpg",
      "likes": [
        "644d1a382dc0f82745ccb464"
      ],
      "comments": [
        {
          "user": "644d1a382dc0f82745ccb464",
          "text": "Gajab! Tony bhai",
          "_id": "644e156720dd5fecb4c42a9f"
        }
      ],
      "createdAt": "2023-04-30T07:03:51.375Z",
      "updatedAt": "2023-04-30T07:14:47.394Z",
      "__v": 0
    }
  ],
  "error": false
}`

### POST `/api/posts`
#### This endpoint will allow user to create a post.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
user     |   string  | yes     | userId.
text     |   string  | yes     | post's content.
image    |   string  | yes     | post's image.

### Response 
status code : 201
message : Posted
error: false

### PATCH `/api/posts/:id`
#### This endpoint will allow user to update post's content and image.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
text     |   string  | no      |post's content.
image    |   string  | no      |post's image.

### Response 
status code : 204
message : Updated
error: false
### DELETE `/api/posts/:id`
#### This endpoint will allow user to delete post.

### Response 
status code : 202
message : Deleted
error: false

### POST `/api/posts/:id/like`
#### This endpoint will allow user to like a specified post.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
userId   |   string  | yes     | userId.

### Response 
status code : 201
message : Liked or Already liked (if already liked)
error: false
### POST `/api/posts/:id/comment`
#### This endpoint will allow user to comment on a specified post.
### Request Parameters
Name     |   Type    | Require | Description
---------|-----------|---------|-------------
user     |   string  | yes     | userId.
text     |   string  | yes     | text of comment.

### Response 
status code : 201
message : Liked or Already liked (if already liked)
error: false

### GET `/api/posts/:id`
#### This endpoint will return post by id.
### Response 
status code : 200
`{
  "message":{
      "_id": "644e12d72b115461576fd1d4",
      "user": "644d1a382dc0f82745ccb464",
      "text": "Hey I am Thor. Do you know me?",
      "image": "https://c4.wallpaperflare.com/wallpaper/375/342/535/thor-chris-hemsworth-men-mjolnir-wallpaper-preview.jpg",
      "likes": [
        "644d1a382dc0f82745ccb464"
      ],
      "comments": [
        {
          "user": "644d1a382dc0f82745ccb464",
          "text": "Gajab! Tony bhai",
          "_id": "644e156720dd5fecb4c42a9f"
        }
      ],
      "createdAt": "2023-04-30T07:03:51.375Z",
      "updatedAt": "2023-04-30T07:14:47.394Z",
      "__v": 0
    }
  ],
  "error": false
}`
