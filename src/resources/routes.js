import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'

const router = new Router()
const userController = new UserController()
router.get('/', (req, res) => {
    return res.status(200).json({ success: 'Hello World!' })
})

router.post('/user', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

export { router }
