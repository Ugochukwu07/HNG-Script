//constructor
function Info(name, id, email, language){
    this.yourName=name;
    this.yourId=id;
    this.yourEmail=email;
    this.yourLanguage=language;
}

let myName="Obatobi Ayeni";
let myId="HNG-04196";
let myEmail="ayeniobatobi@gmail.com";
let myLanguage="JavaScript";

function output(){
    console.log('Hello World, this is ' + myName + ' with HNGi7 ID ' + myId + ' and email ' + myEmail + ' using ' + myLanguage + ' for stage 2 task.');
}

let info=new info(myName, myId, myEmail, myLanguage);
output();