
function loadJoke() {    

    var num1 = document.getElementById("quantityJokes").value
   

// URL source of requests, where to go to get data
var requestURL = "http://api.icndb.com/jokes/random/" + num1
// makes web requests 
var request = new XMLHttpRequest()
// type of request and which url to go to
request.open ("GET", requestURL);
// the format of the reponse from the server
request.responseType = "json";

// on return of data in a json file execute this function
request.onload = function() {

    var requestData = request.response

    var allJokes = ""

 for (var i = 0; i < requestData.value.length; i++) {
        
    allJokes += "<li>" + requestData.value[i].joke + "</li>"

  }

    document.getElementById("output").innerHTML = allJokes 

 
}

request.send()
}

