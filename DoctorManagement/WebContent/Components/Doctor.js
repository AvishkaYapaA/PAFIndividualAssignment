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
	var status = validateItemForm();
	
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var method = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "DoctorAPI",
		type : method,
		data : $("#formItem").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onItemSaveComplete(response.responseText, status);
		}
	});
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
	$("#Dname").val($(this).closest("tr").find('td:eq(0)').text());
	$("#Dreg").val($(this).closest("tr").find('td:eq(1)').text());
	$("#Special").val($(this).closest("tr").find('td:eq(2)').text());
	$("#ContactNo").val($(this).closest("tr").find('td:eq(3)').text());
	$("#Address").val($(this).closest("tr").find('td:eq(4)').text());
	$("#Email").val($(this).closest("tr").find('td:eq(5)').text());
	$("#HospitalName").val($(this).closest("tr").find('td:eq(6)').text());
});

function onItemSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
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
	
	$("#hidItemIDSave").val("");
	$("#formItem")[0].reset();
}

$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "DoctorAPI",
		type : "DELETE",
		data : "doctorId=" + $(this).data("itemid"),
		dataType : "text",
		complete : function(response, status)
		{
			onItemDeleteComplete(response.responseText, status);
		}
	});
});

function onItemDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
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
function validateItemForm() {

    // DoctorName
    if ($("#Dname").val().trim() == "") {

        return "Insert the Doctor Name";

    }

    // Doctor Registration No
    if ($("#Dreg").val().trim() == "") {

        return "Insert the Doctor Registration No.";

    }

    // Doctor Specialization
    if ($("#Special").val().trim() == "") {

        return "Insert the the spcialization of the doctor";

    }


    // divDoctorGrid Password
    if ($("#ContactNo").val().trim() == "") {

        return "Insert a Contact No";

    }
    
    if ($("#Address").val().trim() == "") {

        return "Insert a Address";

    }
    if ($("#Email").val().trim() == "") {

        return "Insert Doctor Email";

    }
    if ($("#HospitalName").val().trim() == "") {

        return "Insert a Hospital Name";

    }
    
    return true;

}