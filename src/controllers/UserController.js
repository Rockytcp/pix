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
            return res.status(500).json({ error: err.detail })
        }
    }

    async getUsers(req, res) {
        try {
            const userService = new UserService()
            const users = await userService.getAllUsersService()
            res.status(200).json(users)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }

    async getUserById(req, res) {
        try {
            const userService = new UserService()
            const user = await userService.getUserById(req.params.id)
            if (user.length === 0) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json(user)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }

    async updateUser(req, res) {
        try {
            const userService = new UserService()
            const updatedUser = await userService.updateUser(req.params.id, req.body)
            if (updatedUser.length === 0) {
                return res.status(404).json({ error: 'User not found' })
            }
            res.status(200).json({ UserAtualizado: updatedUser })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }

    async deleteUser(req, res) {
        try {
            const userService = new UserService()
            const deletedUser = await userService.deleteUser(req.params.id)
            if (deletedUser.length === 0) {
                return res.status(404).json({ error: 'User not found' })
            }
            return res.status(200).json({
                success: `Usuário com id = ${deletedUser} foi corretamente deletado do Banco de Dados`,
            })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }
}

export { UserController }
