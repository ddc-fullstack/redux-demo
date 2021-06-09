import {Request, Response, NextFunction} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllPosts} from '../../utils/post/selectAllPosts';
import {selectPostsByPostUserId} from '../../utils/post/selectPostsByPostUserId';

export async function getPostsByPostUserId(request: Request, response: Response) : Promise<Response<Status>> {
	try {
		const {postUserId} = request.params
		const data = await selectPostsByPostUserId(postUserId)
		return (response.json({status:200, message:null, data}))
	} catch (error) {
		return response.json({
			status: 500,
			message: "",
			data: []
		})
	}
}

export async function getAllPosts(request: Request, response: Response) : Promise<Response<Status>> {
	try {
		const data = await selectAllPosts();
		return response.json({status:200,message:null, data})


	} catch (error) {
		return response.json({
			status: 500,
			message: "",
			data: []
		})
	}
}