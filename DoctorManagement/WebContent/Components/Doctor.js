$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateDoctorForm();
	
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var method = ($("#hidDoctorIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "DoctorAPI",
		type : method,
		data : $("#formDoctor").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorSaveComplete(response.responseText, status);
		}
	});
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidDoctorIDSave").val($(this).closest("tr").find('#hidDoctorIDUpdate').val());
	$("#Dname").val($(this).closest("tr").find('td:eq(0)').text());
	$("#Dreg").val($(this).closest("tr").find('td:eq(1)').text());
	$("#Special").val($(this).closest("tr").find('td:eq(2)').text());
	$("#ContactNo").val($(this).closest("tr").find('td:eq(3)').text());
	$("#Address").val($(this).closest("tr").find('td:eq(4)').text());
	$("#Email").val($(this).closest("tr").find('td:eq(5)').text());
	$("#HospitalName").val($(this).closest("tr").find('td:eq(6)').text());
});

function onDoctorSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divDoctorGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidDoctorIDSave").val("");
	$("#formDoctor")[0].reset();
}

$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "DoctorAPI",
		type : "DELETE",
		data : "doctorId=" + $(this).data("doctorid"),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorDeleteComplete(response.responseText, status);
		}
	});
});

function onDoctorDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divDoctorGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


//Client Model
function validateDoctorForm() {
	
function validateEmail($email) {
	 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	 return emailReg.test( $email );
}




    // DoctorName
    if ($("#Dname").val().trim() == "") {

        return "Insert the Doctor Name";
    }

    // Doctor Registration No
    var tmpDreg = $("#Dreg").val().trim();
    if (!$.isNumeric(tmpDreg))
    {
        return "Insert a numerical value for Doctor Registration Number";
    }
    
    


    // Doctor Specialization
    if ($("#Special").val() == "0")
    {
    return "Select Specialization.";
    }

    //Contact No
    if ($("#ContactNo").val().trim() == "") {

        return "Insert a Contact No";
    }
    
    // is numerical value
    var tmpContactNo = $("#ContactNo").val().trim();
    if (!$.isNumeric(tmpContactNo))
    {
        return "Insert a numerical value for Contact Number.";
    }
    
	//length validate
	if ($("#ContactNo").val().length > 10){
		return "Only 10 Digits For mobile Number"
	}
	if ($("#ContactNo").val().length < 10){
		return "Please enter 10 digits for Contact Number"
	}

    //Address Validation
    if ($("#Address").val().trim() == "") {

        return "Insert a Address";

    }
    //Email Validation
    var tmpEmail = $("#Email").val().trim();
    if ( !validateEmail(tmpEmail))
    {
        return "Insert the email correctly.";
    }

    
    //Hospital Validation
    if ($("#HospitalName").val().trim() == "") {

        return "Insert a Hospital Name";

    }

    return true;

}

//Scroll Button
$("#buttonscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#divDoctorGrid").offset().top
    }, 1500);
});








