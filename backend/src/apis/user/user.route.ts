import { Router } from 'express'
import {getAllUsers, getUserByUserId} from './user.controller';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.contoller';
import {check} from 'express-validator';



export const userRouter = Router()


userRouter.route("/:userId").get(
	asyncValidatorController(
		[check("userId", "Please provide a valid userId").isUUID()]
	),
	getUserByUserId
)
userRouter.route("/").get(getAllUsers)






