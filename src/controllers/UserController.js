import { UserService } from '../services/UserService.js'

class UserController {
    async createUser(req, res) {
        try {
            const userService = new UserService()
            const id = await userService.createUserService(req.body)
            res.status(200).json({
                success: `User created and registeres with id = ${id}`,
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Something went wrong' })
        }
    }
}

export { UserController }
