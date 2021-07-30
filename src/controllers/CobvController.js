import { CobvService } from '../services/CobvService.js'

class CobvController {
    async createCobv(req, res) {
        try {
            const cobvService = new CobvService()
            const cobv = await cobvService.createCobv(
                req.body.cobv,
                req.body.devedor,
                req.body.recebedor
            )
            res.status(200).json(cobv)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }

    async getCobvById(req, res) {
        try {
            const cobvService = new CobvService()
            const cobv = await cobvService.getCobvById(req.params.id)
            res.status(200).json(cobv)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: err.detail })
        }
    }
}

export { CobvController }
