import {User} from '../interfaces/User';
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2"

export async function insertUser(user: User):Promise<string> {
	try{
		const mysqlConnection = await connect();
		const mysqlQuery = "INSERT INTO user(userId, email, name, phone, username, website) VALUES(UUID_TO_BIN(:userId), :email, :name, :phone, :username, :website) "

  await <RowDataPacket> mysqlConnection.execute(mysqlQuery, user)
		console.log("post created successfully")
		return "User created successfully"
	} catch (error) {
		throw error
	}
}