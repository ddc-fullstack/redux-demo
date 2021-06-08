
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2"
import {Post} from '../interfaces/Post';

export async function insertPost(post: Post):Promise<string> {
	try{
		const mysqlConnection = await connect();
		const mysqlQuery = "INSERT INTO post(postId, postUserId, body, title) VALUES(UUID_TO_BIN(:postId), UUID_TO_BIN(:postUserId),:body, :title) "

		await <RowDataPacket> mysqlConnection.execute(mysqlQuery, post)
		console.log("post created successfully")
		return "post created successfully"

	} catch (error) {
		throw error
	}
}