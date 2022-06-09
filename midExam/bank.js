/* census form app*/

"use strict";

window.onload=function(){
    const censusForm=document.getElementById("censusform");
    censusForm.addEventListener("submit",event=>{
        event.preventDefault();
        const fullName=document.getElementById("fullname");
        const Address=document.getElementById("Address");
        const AccountNumber=document.getElementById("Accountno");
        const AccountType=document.getElementById("Type of Acc");
        const AccountOwnerShipType= censusForm.elements[("radioBtnpersonalacc")];
        alert(` Fullname: ${fullName.value}
                Address: ${Address.value}
                AccountNumber: ${AccountNumber.value}
                AccountType:${AccountType.value}
                AccountOwnerShipType:${AccountOwnerShipType.value}
        `)
       
fullName.value="";
Address.value="";
AccountNumber.value="";
AccountType.value="";
AccountOwnerShipType.value="";
    });
}