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
}

export { DbModules }
