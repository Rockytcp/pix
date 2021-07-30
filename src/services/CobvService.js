import { UserDbModules } from '../modules/UserdbModules.js'
import { CobvDbModules } from '../modules/CobvDbModules.js'

class CobvService {
    async createCobv(reqCobvData, reqDevedorData, reqRecebedorData) {
        const { txid, revisao, status, solicitacaoPagador } = reqCobvData

        const userDbModules = new UserDbModules()

        const devedor = await userDbModules.createUser(
            reqDevedorData.fullName,
            reqDevedorData.userDocument,
            reqDevedorData.email,
            reqDevedorData.address,
            reqDevedorData.city,
            reqDevedorData.state,
            reqDevedorData.postalCode
        )

        const recebedor = await userDbModules.createUser(
            reqRecebedorData.fullName,
            reqRecebedorData.userDocument,
            reqRecebedorData.email,
            reqRecebedorData.address,
            reqRecebedorData.city,
            reqRecebedorData.state,
            reqRecebedorData.postalCode
        )

        const cobvDbModules = new CobvDbModules()

        await cobvDbModules.createCobv(
            txid,
            revisao,
            status,
            devedor.toString(),
            recebedor.toString(),
            solicitacaoPagador
        )
        const savedDevedor = await userDbModules.getUserById(devedor.toString())
        const savedRecebedor = await userDbModules.getUserById(recebedor.toString())
        const savedCobv = {
            txid: txid,
            revisao: revisao,
            status: status,
            devedor: savedDevedor,
            recebedor: savedRecebedor,
            solicitacaoPagador: solicitacaoPagador,
        }

        return savedCobv
    }

    async getCobvById(txid) {
        const cobvDbModules = new CobvDbModules()
        const userDbModules = new UserDbModules()
        const cobv = await cobvDbModules.getCobvByTxId(txid)
        const devedor = await userDbModules.getUserById(cobv.devedor)
        const recebedor = await userDbModules.getUserById(cobv.recebedor)
        const completeCobv = {
            txid: cobv.txid,
            revisao: cobv.revisao,
            status: cobv.status,
            devedor: devedor,
            recebedor: recebedor,
            solicitacaoPagador: cobv.solicitacaoPagador,
        }
        return completeCobv
    }
}

export { CobvService }
