import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { CobvController } from '../controllers/CobvController.js'
import { ValidateCobv } from '../middlewares/validateCobv.js'

const router = new Router()
const userController = new UserController()
const cobvController = new CobvController()
const validateCobv = new ValidateCobv()
router.get('/', (req, res) => {
    return res.status(200).json({ success: 'Hello World!' })
})

router.post('/user', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUserById)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
router.post('/cobv', validateCobv.validateBody, cobvController.createCobv)
router.get('/cobv/:id', cobvController.getCobvById)

export { router }
