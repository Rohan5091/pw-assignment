
const regex= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

 let input="https://www.linkedin.com/in/af67-_rr77/"
if (regex.test(input)) {
  console.log("Valid url");
} else {
  console.log("In valid url");
}