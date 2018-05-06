var client;


function startDataUpload() {
alert ("start data upload");
var clientid = document.getElementById("clientid").value;
var questionid = document.getElementById("questionid").value;
var question = document.getElementById("question").value;
var answear1 = document.getElementById("answear1").value;
var answear2 = document.getElementById("answear2").value;
var answear3 = document.getElementById("answear3").value;
var answear4 = document.getElementById("answear4").value;
//alert(name + " "+ surname + " "+module);
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
var postString = "clientid="+clientid +"&questionid="+questionid+"&question="+question+"&answear1="+answear1+"&answear2="+answear2+"&answear3="+answear3+"&answear4="+answear4; 
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

// now get the radio button values
if (document.getElementById("answearnumber1").checked) {
var correct=document.getElementById("answearnumber1").value;
postString=postString+"&answearnumber="+correct
}
if (document.getElementById("answearnumber2").checked) {
var correct=document.getElementById("answearnumber2").value;
postString=postString+"&answearnumber="+correct
}
if (document.getElementById("answearnumber3").checked) {
var correct=document.getElementById("answearnumber3").value;
postString=postString+"&answearnumber="+correct
}
if (document.getElementById("answearnumber4").checked) {
var correct=document.getElementById("answearnumber4").value;
postString=postString+"&answearnumber="+correct
}


processData(postString);}

function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30272/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}
// create the code to wait for the response from the data server, and process the response once it is received

function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}