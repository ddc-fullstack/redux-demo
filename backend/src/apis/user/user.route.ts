import { Router } from 'express'
import {getAllUsers, getUserByUserId} from './user.controller';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.contoller';
import {check} from 'express-validator';
import {getPostsByPostUserId} from '../post/post.controller';
import {postRouter} from '../post/post.route';

export const UserRouter = Router()


UserRouter.route("/").get(getAllUsers)

postRouter.route("/:userId")
	.get(
		asyncValidatorController(
			[check("userId", "Please provide a valid userId").isUUID()]
		),
		getUserByUserId
	)




