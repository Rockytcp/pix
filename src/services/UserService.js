import { DbModules } from '../modules/dbModules.js'
class UserService {
    async createUserService(reqData) {
        const { firstName, lastName, email } = reqData
        const dbModules = new DbModules()
        return await dbModules.createUser(firstName, lastName, email)
    }
}

export { UserService }
