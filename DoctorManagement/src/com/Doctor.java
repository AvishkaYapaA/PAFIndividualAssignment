package com;

import java.sql.*;

public class Doctor {
	private Connection connect()
	{
		Connection con = null;
		
		try
		{
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/ healthcaredb?serverTimezone=UTC", "root", "");
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
		return con;
	}
	
	public String insertDoctors( String dname, String dRegNo, String specialization, String contactNo, String address, String email, String hospitalName)
	{
		String output = "";
		try
		{
			Connection con = connect();
			
			if (con == null)
			{
				return "Error while connecting to the database for inserting.";
			}
			
			/// create a prepared statement
			String query = "insert into doctor"
					+"(`DoctorId`,`Dname`,`DRegNo`,`Specialization`,`ContactNo`,`Address`,`Email`,`HospitalName`)"
					 + " values (?, ?, ?, ?, ?, ?, ?, ?)";
					PreparedStatement preparedStmt = con.prepareStatement(query); 
			
					// binding values
					preparedStmt.setInt(1, 0);
					preparedStmt.setString(2, dname);
					preparedStmt.setString(3, dRegNo);
					preparedStmt.setString(4, specialization);
					preparedStmt.setString(5, contactNo);
					preparedStmt.setString(6, address);
					preparedStmt.setString(7, email);
					preparedStmt.setString(8, hospitalName);
			
			// execute the statement
			preparedStmt.execute();
			con.close();
			
			String newDoctor = readDoctor();
			output = "{\"status\":\"success\", \"data\": \"" +newDoctor + "\"}";
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\", \"data\": \"Error while inserting the doctorssss.\"}";
			System.err.println(e.getMessage());
		}
		
		return output;
	}
	
	
	public String readDoctor()
	{
		String output = "";
		
		try
		{
			Connection con = connect();
			
			if (con == null)
			{
				return "Error while connecting to the database for reading.";
			}
			
			// Prepare the html table to be displayed
			output = "<table border='1'>"
					+ "<tr><th>Doctor Name</th>"
					+ "<th>Registration No</th>"
					+ "<th>Specialization</th>"
					+ "<th>Contact No</th>"
					+ "<th>Address</th>"
					+ "<th>Email</th>"
					+ "<th>Hospital Name</th>"
					+ "<th>Update</th>"
					+ "<th>Remove</th></tr>";
			
			
			String query = "select * from doctor";
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			
			// iterate through the rows in the result set
			while (rs.next())
			{

				String doctorId = Integer.toString(rs.getInt("DoctorId"));
				String dname = rs.getString("Dname");
				String dRegNo = rs.getString("DRegNo");
				String specialization = rs.getString("Specialization");
				String contactNo = Integer.toString(rs.getInt("ContactNo"));
				String address = rs.getString("Address");
				String email = rs.getString("Email");
				String hospitalName = rs.getString("HospitalName");
				
				// Add into the html table
				output += "<tr><td><input id='hidItemIDUpdate'name='hidItemIDUpdate' type='hidden' value='" + doctorId+ "'>" + dname + "</td>";
				output += "<td>" + dRegNo + "</td>";
				output += "<td>" + specialization + "</td>";
				output += "<td>" + contactNo + "</td>";
				output += "<td>" + address + "</td>";
				output += "<td>" + email + "</td>";
				output += "<td>" + hospitalName + "</td>";
			
				// buttons
				output += "<td><input name='btnUpdate'type='button' "
						+ "value='Update'class='btnUpdate btn btn-secondary'></td>"
						+ "<td><input name='btnRemove'type='button' "
						+ "value='Remove'class='btnRemove btn btn-danger'data-itemid='"+ doctorId + "'>" + "</td></tr>";
			}
			
			con.close();
			
			// Complete the html table
			output += "</table>";
			
		}
		catch (Exception e)
		{
			output = "Error while reading the doctors.";
			System.err.println(e.getMessage());
		}
		
		return output;
	}
	
	
	public String updateDoctor(String doctorId,String dname, String dRegNo, String specialization, String contactNo, String address,
			String email, String hospitalName) {
		String output = "";
		
		try
		{
			Connection con = connect();
			
			if (con == null)
			{
				return "Error while connecting to the database for updating.";
			}
			
			// create a prepared statement
			String query = "UPDATE doctor SET Dname = ?, DRegNo = ?,Specialization = ?,ContactNo = ?, Address = ?,Email = ?,HospitalName = ? WHERE DoctorId=?";
		PreparedStatement preparedStmt = con.prepareStatement(query);
			
		// binding values
					preparedStmt.setString(1, dname);
					preparedStmt.setString(2, dRegNo);
					preparedStmt.setString(3, specialization);
					preparedStmt.setInt(4,Integer.parseInt(contactNo));
					preparedStmt.setString(5, address);
					preparedStmt.setString(6, email);
					preparedStmt.setString(7, hospitalName);
					preparedStmt.setInt(8, Integer.parseInt(doctorId));
			
			// execute the statement
			preparedStmt.execute();
			con.close();
			
			String newDoctor = readDoctor();
			output = "{\"status\":\"success\", \"data\": \"" + newDoctor + "\"}";
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\", \"data\": \"Error while updating the item.\"}";
			System.err.println(e.getMessage());
		}
		
		return output;
	}
	
	
	
	public String deleteDoctor(String doctorId) 
	{
		String output = "";
		
		try
		{
			Connection con = connect();
			
			if (con == null)
			{
				return "Error while connecting to the database for deleting.";
			}
			
			String query = "delete from doctor where DoctorId=?";
			PreparedStatement preparedStmt = con.prepareStatement(query);
			// binding values
			preparedStmt.setInt(1, Integer.parseInt(doctorId));
			
			// execute the statement
			preparedStmt.execute();
			con.close();
			
			String newDoctor = readDoctor();
			output = "{\"status\":\"success\", \"data\": \"" + newDoctor + "\"}";
		}
		catch (Exception e)
		{
			output = "{\"status\":\"error\", \"data\": \"Error while deleting the item.\"}";
			System.err.println(e.getMessage());
		}
		
		return output;
	}
}
