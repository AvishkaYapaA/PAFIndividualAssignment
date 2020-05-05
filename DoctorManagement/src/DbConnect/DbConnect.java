package DbConnect;

import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.SQLException;

//import java.sql.*;

public class DbConnect {
	
	private static Connection connection;
	
	private DbConnect() {
	}
	
	//A common method to connect to the DB
	public static Connection connect() throws SQLException, ClassNotFoundException {
		
		if (connection == null || connection.isClosed()) {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			// Provide the correct details: DBServer/DBName, username, password
			connection = DriverManager
					.getConnection("jdbc:mysql://127.0.0.1:3306/healthcaredb?serverTimezone=UTC", "root", "");
		}
		return connection;
	
	}
	
}
