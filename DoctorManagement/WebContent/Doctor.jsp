<%@page import="com.Doctor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Doctor Management</title>
 <link rel="icon" type="image/x-icon" href="image/favicon.ico" />
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Doctor.js"></script>


    <style>

body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f6f9fa;
  direction: ltr;
  -moz-osx-font-smoothing: grayscale;
}
    </style>

</head>
<body>
<div class="container">
	<div class="row">
		<div class="col-12">
		   <div class="row"> 
			<h1>Doctor Management </h1>
			     <div class="btn float-right">
                    <div class="col-xs-12">
                        <a id="buttonscroll" style="color: white" class="btn btn-success" type="button">View Doctors List</a>
                    </div>
               </div>
           </div>
           	<br>
				
         </div>                     
			<div class="col-6">
			
			<form id="formDoctor" name="formDoctor" method="post" action="Doctor.jsp">


            <div class="form-group row">
               <label style="color: #0c0c0c;" class="col-md-4 control-label">Doctor Name :</label>
                <div class="col-md-8">
               <input id="Dname" name="Dname" type="text" class="form-control form-control-sm"  pattern="[A-Za-z]">
               </div>
           </div>
		   <br>
		   
		    <div class="form-group row">
               <label style="color: #0c0c0c;" class="col-md-4 control-label">Registration No :</label>
                <div class="col-md-8">
               <input id="Dreg" name="Dreg" type="text" class="form-control form-control-sm"  maxlength="10">
               </div>
           </div>
		   <br>
		   
		     <div class="form-group row">
               <label style="color: #0c0c0c;" class="col-md-4 control-label">Specialization :</label>
                <div class="col-md-8">
                <select id="Special" name="Special"  class="form-control form-control-sm">
           			    <option value="0">--Select Specialization--</option>
 						<option value="Allergists">Allergists</option>
 						<option value="Anesthesiologists">Anesthesiologists</option>
 						<option value="Cardiologists">Cardiologists</option>
 						<option value="Medicine Specialists"> Medicine Specialists</option>
 						<option value="Dermatologists">Dermatologists</option>
 						<option value=" Endocrinologists">Endocrinologists</option>
				</select>
               </div>
           </div>
		   <br>
		   
		   <div class="form-group row">
              <label style="color: #0c0c0c;" class="col-md-4 control-label"> Contact No`:</label>
                <div class="col-md-8">
                 <input id="ContactNo" name="ContactNo" type="text" class="form-control form-control-sm" maxlength="10">
               </div>
           </div>
		   <br>
		   
		   <div class="form-group row">
              <label style="color: #0c0c0c;" class="col-md-4 control-label"> Address:</label>
                <div class="col-md-8">
                
           
                <textarea id="Address" name="Address" type="text" class="form-control form-control-sm"></textarea>
               </div>
           </div>
		   <br>
		   
		   <div class="form-group row">
              <label style="color: #0c0c0c;" class="col-md-4 control-label">Email:</label>
                <div class="col-md-8">
                     <input id="Email" name="Email" type="text" class="form-control form-control-sm">
               </div>
           </div>
		   <br>
		   
		    <div class="form-group row">
              <label style="color: #0c0c0c;" class="col-md-4 control-label"> Hospital Name:</label>
                <div class="col-md-8">
                    <input id="HospitalName" name="HospitalName" type="text" class="form-control form-control-sm">
               </div>
           </div>
		   <br>
				

				<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
				<input type="hidden" id="hidDoctorIDSave" name="hidDoctorIDSave" value="">
				
				<a href="Doctor.jsp" class="btn btn-danger"  type="button">Cancel</a>
				
			</form>
		  <br>
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>
			</div>
			
			<div class="col-6">
			<br><br>
			 <center> <img src="image/doctor.png" width="400" height="400" ></img> </center>
			</div>

			<div id="divDoctorGrid">
				<%
					Doctor DocObj = new Doctor();
							out.print(DocObj.readDoctor());
				%>
			</div>
		
	</div>
</div>

<script>

    $("#buttonscroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#divDoctorGrid").offset().top
        }, 1500);
    });
    
    
    $( document ).ready(function() {
        $( "#Dname" ).keypress(function(e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });
    });
    
    $( document ).ready(function() {
        $( "#HospitalName" ).keypress(function(e) {
            var key = e.keyCode;
            if (key >= 48 && key <= 57) {
                e.preventDefault();
            }
        });
    });

</script>

<script>
       
        </script>
</body>
</html>