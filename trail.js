const { createReadStream } = require("fs");
const FormData = require("form-data");

const url = 'https://yourhr.s3.ap-south-1.amazonaws.com/'

const fields = {
  "acl": "public-read",
  "bucket": "yourhr",
  "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
  "X-Amz-Credential": "AKIAWEQI3P2WI2QV2LNE/20230507/ap-south-1/s3/aws4_request",
  "X-Amz-Date": "20230507T174147Z",
  "key": "645758e0ab7cfb3ad1ccd530/resume",
  "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wNS0wN1QxODo0MTo0N1oiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJ5b3VyaHIifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsIjY0NTc1OGUwYWI3Y2ZiM2FkMWNjZDUzMC9yZXN1bWUiXSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwxLDEwNDg1NzZdLHsiYWNsIjoicHVibGljLXJlYWQifSx7ImJ1Y2tldCI6InlvdXJociJ9LHsiWC1BbXotQWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFLSUFXRVFJM1AyV0kyUVYyTE5FLzIwMjMwNTA3L2FwLXNvdXRoLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzA1MDdUMTc0MTQ3WiJ9LHsia2V5IjoiNjQ1NzU4ZTBhYjdjZmIzYWQxY2NkNTMwL3Jlc3VtZSJ9XX0=",
  "X-Amz-Signature": "931afc25f78078199cfa1acafbf3669a00b35f3509fc5d7a23faf04dc2162733"
}

const form = new FormData();
Object.entries(fields).forEach(([field, value]) => {
  form.append(field, value);
});
form.append("file", createReadStream("./resume.pdf"));
form.submit(url, (err, res) => {
  console.log(res.statusCode)
  console.log('---------------------')
  console.log(err)
});