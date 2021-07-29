import { dbConnect } from '../../data/db.js'

class DbModules {
    async createUser(firstName, lastName, email) {
        const id = await dbConnect('user')
            .insert({
                email,
                firstName: firstName,
                lastName: lastName,
            })
            .returning('id')

        return id
    }

    async getUsers() {
        const users = await dbConnect('user').select().table('user')
        return users
    }

    async getUserById(id) {
        const user = await dbConnect('user').where('id', id)
        return user
    }

    async updateUser(id, firstName, lastName, email) {
        const updatedUser = await dbConnect('user').where('id', id).update(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
            },
            ['id', 'firstName', 'lastName', 'email']
        )
        return updatedUser
    }

    async deleteUser(id) {
        const deletedUser = await dbConnect('user').where('id', id).del().returning('id')
        console.log(deletedUser)
        return deletedUser
    }
}

export { DbModules }
