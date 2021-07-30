import { dbConnect } from '../../data/db.js'

class CobvDbModules {
    async createCobv(txid, revisao, status, devedor, recebedor, solicitacaoPagador) {
        const cobv = await dbConnect('cobv')
            .insert({
                txid,
                revisao,
                status,
                devedor,
                recebedor,
                solicitacaoPagador,
            })
            .returning([
                'txid',
                'revisao',
                'status',
                'devedor',
                'recebedor',
                'solicitacaoPagador',
            ])
        return cobv
    }

    async getCobvByTxId(txid) {
        const cobv = await dbConnect('cobv').where('txid', txid).first()
        return cobv
    }
}

export { CobvDbModules }
