import * as yup from 'yup'

const schema = yup.object().shape({
    cobv: yup.object({
        txid: yup.string().required(),
        revisao: yup.number().required().positive(),
        status: yup.string().required(),
        solicitacaoPagador: yup.string().required(),
    }),
    devedor: yup.object({
        fullName: yup.string().required(),
        userDocument: yup.string().required(),
        email: yup.string().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        postalCode: yup.string().required(),
    }),
    recebedor: yup.object({
        fullName: yup.string().required(),
        userDocument: yup.string().required(),
        email: yup.string().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        postalCode: yup.string().required(),
    }),
})

export { schema }
