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

    // DoctorName
    if ($("#Dname").val().trim() == "") {

        return "Insert the Doctor Name";

    }

    // Doctor Registration No
    if ($("#Dreg").val().trim() == "") {

        return "Insert the Doctor Registration No.";

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

    //Address Validation
    if ($("#Address").val().trim() == "") {

        return "Insert a Address";

    }
    //Email Validation
    if ($("#Email").val().trim() == "" ) {

        return "Insert Doctor Email";
    }
    
    
    //Hospital Validation
    if ($("#HospitalName").val().trim() == "") {

        return "Insert a Hospital Name";

    }
    
    return true;

}



