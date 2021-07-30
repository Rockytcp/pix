import { dbConnect } from '../../data/db.js'

class UserDbModules {
    async createUser(fullName, userDocument, email, address, city, state, postalCode) {
        const id = await dbConnect('user')
            .insert({
                fullName: fullName,
                userDocument: userDocument,
                email: email,
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
            })
            .returning('id')

        return id
    }

    async getUsers() {
        const users = await dbConnect('user').select().table('user')
        return users
    }

    async getUserById(id) {
        const user = await dbConnect('user').where('id', id).first()
        return user
    }

    async updateUser(
        id,
        fullName,
        userDocument,
        email,
        address,
        city,
        state,
        postalCode
    ) {
        const updatedUser = await dbConnect('user').where('id', id).update(
            {
                fullName: fullName,
                userDocument: userDocument,
                email: email,
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
            },
            [
                'id',
                'fullName',
                'userDocument',
                'email',
                'address',
                'city',
                'state',
                'postalCode',
            ]
        )
        return updatedUser
    }

    async deleteUser(id) {
        const deletedUser = await dbConnect('user').where('id', id).del().returning('id')
        return deletedUser
    }
}

export { UserDbModules }
