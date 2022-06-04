"use strict"

$(document).ready(() => {
    $('form').on('submit',function(evt){
        evt.preventDefault();
    
    const id= $('#patientIdNumber');
    const fName= $('#firstName');
    const mName= $('#middleInitials');
    const lName= $('#lastName');
    const DOB= $('#dateOfBirth');
    const department= $('#ddlDepartment');
    const outYes= $('#radioIsOutPatientYes');
    const outNo= $('#radioIsOutPatientNo');

    const row = `<tr>
    <td>${id.val()}</td>
    <td>${fName.val()}</td>
    <td>${mName.val()}</td>
    <td>${lName.val()}</td>
    <td class ="date">${DOB.val()}</td>
    <td>${department.val()}</td>
    <td class="out">${outYes.is(':checked')?outYes.val():outNo.val()}</td>
    </tr>`
   $('#tbodyPatientsList').append(row);
    })
    $('#chkElderlyPatients').on('change',function(){
        const tbody = document.getElementById("tbodyPatientsList");
        const tr =tbody.getElementsByTagName("tr");
        if($('#chkElderlyPatients').is(':checked')){
        const limit= 1957;
        for(let i=0;i<tr.length;i++){
            const td=tr[i].getElementsByClassName("date")[0];
            if(parseInt(td.textContent.split("-")[0])>limit)
                tr[i].style.display ='none';
        }
  } else{
  for(let i=0;i<tr.length;i++)
   tr[i].style.display='';
  }

    })
    $('#chkShowOutPatients').on('change',function(){
        const tbody = document.getElementById("tbodyPatientsList");
        const tr =tbody.getElementsByTagName("tr");
        if($('#chkShowOutPatients').is(':checked')){
            for(let i=0;i<tr.length;i++){
                const td=tr[i].getElementsByClassName("out")[0];
                if(td.textContent=='No'){
                    tr[i].style.display ='none';
                }
            }
        } else{
            for(let i=0;i<tr.length;i++){
                tr[i].style.display='';
            }
            
        }

    })


})
