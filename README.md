# YourHR
* This is a full stack website build with **MERN stack**. Build for Kudosware internship assignment.
* This is a basic website that allows job seekers to fill out a signup form with their resume.

* Thechnologies involved: 

  1. ReactJS
  2. ExpressJS
  3. MongoDB
  4. Vite to build React app
  5. JSONWebToken (for authentication)
  6. BcryptJS (for password encryption)
  7. AWS S3 (to store resume)
  8. Netlify (to upload frontend), Router (to upload backend), MongoDB atlas (for MongoDB database)

* Features of the website:

  1. Have **token-based authentication** 
  2. Securely stores the details of user such as Email, Password, Name, About, Skills and Resume in the database.
  3. Have basic Responsive UI made using **Flowbite** and **Flowbite Components** (UI library based on tailwindcss) 


### SetUp
1. run commands
```
git clone https://github.com/siddhant-deshmukh/YourHR.git
cd frontend
yarn install
cd ../backend
yarn install
```
2. create AWS s3 bucket [Link]('https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html')

3. While creating bucket

    * Block all Public access (we are going to used presigned url so we don't need this)
    * set Object Ownership ***ACLs enabled***

    * CROS origin sharing

      ```
      [
      {
          "AllowedHeaders": [
              "*"
          ],
          "AllowedMethods": [
              "PUT",
              "POST",
              "DELETE"
          ],
          "AllowedOrigins": [
              "*"
          ],
          "ExposeHeaders": []
      }
      ```

    * Add IAM User and create policy with permission
      ```
      {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Sid": "VisualEditor0",
              "Effect": "Allow",
              "Action": [
                  "s3:PutObject",
                  "s3:GetObject",
                  "s3:ListBucket"
              ],
              "Resource": [
                  "arn:aws:s3:::<bucker-name>",
                  "arn:aws:s3:::<bucker-name>/*"
              ]
          }
        ]
      }
      ```
    * Or simply add policy ***AmazonS3FullAccess*** 


### Envirconment Variables

1. create '.env.local' file in frontend/

```
# url of the backend
VITE_API_URL = ''
```

2. create '.env' file in backend/

```
PORT = '5000'

# to connect to mongodb
MONGO_URI = ''
# frontend url
CLIENT_URL = ''
# token key create long string with different character
TOKEN_KEY = ''

# Create a bucket in S3 and enter its name
BUCKET_NAME = ""
# location of bucket e.g ap-south-1
BUCKET_ZONE = ""

# AWS keys of IAM User haveing permission to create, upload, delete, post  
AWS_ACCESS_KEY_ID =""
AWS_SECRET_ACCESS_KEY=""
```

