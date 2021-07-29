import { DbModules } from '../modules/dbModules.js'
class UserService {
    async createUserService(reqData) {
        const { firstName, lastName, email } = reqData
        const dbModules = new DbModules()
        return await dbModules.createUser(firstName, lastName, email)
    }

    async getAllUsersService() {
        const dbModules = new DbModules()
        const users = await dbModules.getUsers()
        return users
    }

    async getUserById(id) {
        const dbModules = new DbModules()
        const user = await dbModules.getUserById(id)
        return user
    }

    async updateUser(reqId, reqData) {
        const { firstName, lastName, email } = reqData
        const id = reqId
        const dbModules = new DbModules()
        const updatedUser = dbModules.updateUser(id, firstName, lastName, email)
        return updatedUser
    }

    async deleteUser(id) {
        const dbModules = new DbModules()
        const deletedUser = await dbModules.deleteUser(id)
        return deletedUser
    }
}

export { UserService }
