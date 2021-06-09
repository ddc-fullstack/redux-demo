import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"

import {User} from '../interfaces/User';

export async function selectAllUsers() : Promise<User[]> {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID (userId) AS userId , email, name, phone, username, website FROM user'
		const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
		return result[0] as User[]
	} catch (error) {
		throw error
	}
}