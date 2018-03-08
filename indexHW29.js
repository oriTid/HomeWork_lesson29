// JavaScript source code


class Person {
    constructor() {
        this.personDetails = [];

    }
}

function start() {
    if (document.getElementById("birthInput").value !== "" && document.getElementById("nameInput").value !== "") {
        var birthDate = document.getElementById("birthInput").value;
        var today = new Date();
        var birthDateFromat = new Date(birthDate);
        if (birthDateFromat > today) {
            alert("WOW - you came from the future ? HA HA !!");
            return;
        }
        var age = today.getFullYear() - birthDateFromat.getFullYear();
        if (age > 120) {
            alert("WOW - you so old, do you know you are using a compouter?? ';,,;'");
            return;
        }

        document.getElementById("calcAge").value = age;
        person();
    }
    else alert("Please fill up your Name,favourite color and Birthdate.\nYour age will be calculated automatically.");
    return;
}

function person() {

    //-------------------step 1 - create a new person
    let newPerson = new Person();

    let personArr = document.getElementsByClassName("personDetails");
    for (let singleElement of personArr) {

        newPerson.personDetails.push(singleElement.value);
    }

    alert(`Thank you for your time ${document.getElementById("nameInput").value}.`);

    //-------------------step 2 - get all the stored persons from local storage
    let prevPerson = localStorage.getItem("personDetails");
    prevPerson = prevPerson ? JSON.parse(prevPerson) : [];

    //-------------------step 3 - add the new person to all the stored persons from local storage
    prevPerson.push(newPerson);

    //-------------------step 4 - set new person list to the local storage
    localStorage.setItem("personDetails", JSON.stringify(prevPerson));


    print2Screen();
}


function print2Screen() {

    document.getElementById("results").innerHTML = "";

    var localstoragedetails = localStorage.getItem("personDetails");
    var name1;
    var age;
    var color;
    var birthdate;


    for (let pr of JSON.parse(localstoragedetails)) {

        name1 = pr["personDetails"][0];
        color = pr["personDetails"][1];
        birthdate = pr["personDetails"][2];
        age = pr["personDetails"][3];


        document.getElementById("results").innerHTML += "<li style=\"color:" + color + "\"> " + name1 + "</br>" + birthdate + "</br>" + age + "</li>"
    }
    document.getElementById("nameInput").value = "";
    document.getElementById("colorInput").value = "#000000"
    document.getElementById("birthInput").value = "";
    document.getElementById("calcAge").value = "";


}


//function displayPerson() {
//    let personDetails = localStorage.getItem("personDetails");


//    document.getElementById("results").innerHTML = ((personDetails) ? personDetails : "No History");

//}

function clearLocal() {
    localStorage.clear();
    document.getElementById("results").innerHTML = "";
}

