import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectAllUsers} from '../../utils/user/selectAllUsers';
import {selectUserByUserId} from '../../utils/user/selectUserByUserId';

export async function getUserByUserId(request: Request, response: Response) : Promise<Response<Status>> {
	try {
		const {userId} = request.params
		const data = await selectUserByUserId(userId)
		return (response.json({status:200, message:null, data}))
	} catch (error) {
		return response.json({
			status: 500,
			message: "",
			data: []
		})
	}
}

export async function getAllUsers(request: Request, response: Response) : Promise<Response<Status>> {
	try {
		const data = await selectAllUsers()
		return response.json({status:200,message:null, data})


	} catch (error) {
		return response.json({
			status: 500,
			message: "",
			data: []
		})
	}
}