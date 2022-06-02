/**
 * app.js
 * 
 * @author okalu
 * @since 2022-05-30
 */
var employeeData = {
    firstName: "Anna",
    lastName: "Smith",
    salary: 250000,
    address: {
        "house number": 1000,
        apartment: {
            floor: 12,
            number: 301
        },
        street: "North Fourth Street",
        city: Fairfield,
        state: Iowa,
        zipCode: 52557
    }
};

var empInfo = ``;
var divEmpInfo = document.getElementById("empInfo");
// divEmpInfo.innerText = 