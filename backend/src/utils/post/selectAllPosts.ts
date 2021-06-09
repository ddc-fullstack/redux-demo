
import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"
import {Post} from '../interfaces/Post';

export async function selectAllPosts() : Promise<Post[]> {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID (postUserId) AS postUserId, body, title FROM post'
		const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
		return result[0] as Post[]
	} catch (error) {
		throw error
	}
}