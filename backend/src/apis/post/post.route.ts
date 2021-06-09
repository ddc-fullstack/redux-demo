import { Router } from 'express'
import {getAllPosts, getPostsByPostUserId} from './post.controller';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.contoller';
import {check} from 'express-validator';

export const postRouter = Router()


postRouter.route("/")
	.get(getAllPosts)

postRouter.route("/postUserId/:postUserId")
	.get(
		asyncValidatorController(
			[check("postUserId", "Please provide a valid postUserId").isUUID()]
		),
		getPostsByPostUserId
	)





