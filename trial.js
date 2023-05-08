
const { createReadStream } = require("fs");
const FormData = require("form-data");

const url = 'https://yourhr.s3.ap-south-1.amazonaws.com'
const fields = {
  "bucket": "yourhr",
  "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
  "X-Amz-Credential": "AKIAWEQI3P2WI2QV2LNE/20230507/ap-south-1/s3/aws4_request",
  "X-Amz-Date": "20230507T185813Z",
  "key": "64560c4b3b6324eee182d09c/resume",
  "Policy": "eyJleHBpcmF0aW9uIjoiMjAyMy0wNS0wN1QxOTo1ODoxM1oiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRrZXkiLCI2NDU2MGM0YjNiNjMyNGVlZTE4MmQwOWMvcmVzdW1lIl0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDQ4NTc2XSx7ImJ1Y2tldCI6InlvdXJociJ9LHsiWC1BbXotQWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFLSUFXRVFJM1AyV0kyUVYyTE5FLzIwMjMwNTA3L2FwLXNvdXRoLTEvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzA1MDdUMTg1ODEzWiJ9LHsia2V5IjoiNjQ1NjBjNGIzYjYzMjRlZWUxODJkMDljL3Jlc3VtZSJ9XX0=",
  "X-Amz-Signature": "7a34381ec9d74ec9eb35af72d517a29bb76a202f709d712ba9787b9911804f16"
}

const form = new FormData();
Object.entries(fields).forEach(([field, value]) => {
  form.append(field, value);
});
form.append("file", createReadStream("./resume.pdf"));
form.submit(url, (err, res) => {
  console.log(err)
  console.log(res.statusCode)
  console.log(res)
});