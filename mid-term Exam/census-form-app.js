/**
 * 
 * 
 */

"use strict";
/*
census-form-app.js
*/

"use strict";
window.onload=function(){
    const censusForm= document.getElementById("censusForm");
    censusForm.addEventListener("submit", event => {
        event.preventDefault();

        const fullName= document.getElementById("fullName");
        const citizenId= document.getElementById("citizenId");
        const ssn= document.getElementById("ssn");
        const state= document.getElementById("fullName");
        const snrCitizen= censusForm.elements["radBtnSnrCitizen"];
       // const formData= 
       alert(` Full Name: ${fullName.value}
        CitizenID: ${citizenId.value}
        Social Sec NoSc: ${ssn.value}
        State: ${state.value}
        Is a Senior Citizen: ${snrCitizen.value}
        `);
      
        fullName.Value="";
        citizenId.value="";
        ssn.value="";
        state.value="";
    });
}