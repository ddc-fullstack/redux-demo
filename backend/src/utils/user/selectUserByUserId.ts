import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"

import {User} from '../interfaces/User';

export async function selectUserByUserId(userId: string) : Promise<User[]> {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID (userId) AS userId , email, name, phone, username, website FROM user where UUID_TO_BIN(:userId)'
		const result = await mySqlConnection.execute(mySqlQuery, {userId}) as RowDataPacket[]
		return result[0] as User[]
	} catch (error) {
		throw error
	}
}