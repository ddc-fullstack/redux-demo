
import {insertPost} from '../post/insertPost';
import {insertUser} from '../user/insertUser';
import {users} from './users';
import {posts} from './posts';

function ddcTweetDataDownloader() : Promise<any> {
	async function main() {
		try{
			await downloadUsers()
			await downloadPosts()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function downloadUsers() {
		try {
			for (let user of users) {
				await insertUser(user)
			}

		} catch (error) {
			throw error
		}
	}

	async function  downloadPosts() {
		try {
			for(let post of posts){
				await insertPost(post)
			}
		} catch (error) {
			throw error

		}
	}
}

ddcTweetDataDownloader()
	.catch(error => {
	console.error(error)
})