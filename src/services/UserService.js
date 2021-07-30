import { UserDbModules } from '../modules/UserdbModules.js'
class UserService {
    async createUserService(reqData) {
        const { fullName, userDocument, email, address, city, state, postalCode } =
            reqData
        const userDbModules = new UserDbModules()
        return await userDbModules.createUser(
            fullName,
            userDocument,
            email,
            address,
            city,
            state,
            postalCode
        )
    }

    async getAllUsersService() {
        const userDbModules = new UserDbModules()
        const users = await userDbModules.getUsers()
        return users
    }

    async getUserById(id) {
        const userDbModules = new UserDbModules()
        const user = await userDbModules.getUserById(id)
        return user
    }

    async updateUser(reqId, reqData) {
        const { fullName, userDocument, email, address, city, state, postalCode } =
            reqData
        const id = reqId
        const userDbModules = new UserDbModules()
        const updatedUser = userDbModules.updateUser(
            id,
            fullName,
            userDocument,
            email,
            address,
            city,
            state,
            postalCode
        )
        return updatedUser
    }

    async deleteUser(id) {
        const userDbModules = new UserDbModules()
        const deletedUser = await userDbModules.deleteUser(id)
        return deletedUser
    }
}

export { UserService }
