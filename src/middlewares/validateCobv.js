import { schema } from '../validators/cobvYupSchema.js'

class ValidateCobv {
    async validateBody(req, res, next) {
        try {
            console.log(await schema.validate(req.body))
            next()
        } catch (err) {
            res.status(400).json({ error: err.errors })
        }
    }
}

export { ValidateCobv }
