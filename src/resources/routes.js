import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { CobvController } from '../controllers/CobvController.js'

const router = new Router()
const userController = new UserController()
const cobvController = new CobvController()
router.get('/', (req, res) => {
    return res.status(200).json({ success: 'Hello World!' })
})

router.post('/user', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
router.post('/cobv', cobvController.createCobv)
router.get('/cobv/:id', cobvController.getCobvById)

export { router }
