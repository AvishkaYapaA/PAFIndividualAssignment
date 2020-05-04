<%@page import="com.Doctor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Doctor.js"></script>

</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-6">
			<h1>Doctor Management </h1>
			
			<form id="formItem" name="formItem" method="post" action="Doctor.jsp">

				Doctor Name:
				<input id="Dname" name="Dname" type="text" class="form-control form-control-sm">
				<br>
				
				Doctor Registration No:
				<input id="Dreg" name="Dreg" type="text" class="form-control form-control-sm">
				<br> 
				
				Specialization:
		        <input id="Special" name="Special" type="text" class="form-control form-control-sm">
		        <br> 
		        
		        Contact No`:
		        <input id="ContactNo" name="ContactNo" type="text" class="form-control form-control-sm">
	            <br> 
	            
	            Address:
		        <input id="Address" name="Address" type="text" class="form-control form-control-sm">
		        <br> 
		        
		        Email:
		        <input id="Email" name="Email" type="text" class="form-control form-control-sm">
		        <br> 
		        
		        Hospital Name:
		        <input id="HospitalName" name="HospitalName" type="text" class="form-control form-control-sm">
				
				<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
				<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
				
			</form>
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>

			<div id="divItemsGrid">
				<%
					Doctor DocObj = new Doctor();
							out.print(DocObj.readDoctor());
				%>
			</div>
		</div>
	</div>
</div>
</body>
</html>