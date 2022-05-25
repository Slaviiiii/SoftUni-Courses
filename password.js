function password(input) {
let password ="s3cr3t!P@ssw0rd";
if (password == input[0]){
 console.log("Welcome");
} else {
    console.log("Wrong password!");
}
}

password(["s3cr3t!P@ssw0rd"])