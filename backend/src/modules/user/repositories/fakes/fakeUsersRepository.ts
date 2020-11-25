import ICreateUserDTO from "@modules/user/dtos/iCreateUserDTO"
import User from "../../entities/user"
import IUsersRepository from "../iUsersRepository"
import { uuid } from "uuidv4"
import IUpdateUserDTO from "@modules/user/dtos/iUpdateUserDTO"

export default class FakeUsersRepository implements IUsersRepository {

    private users: User[] = []

    async findById(id: string): Promise<User> {

        const [user] = this.users.filter(u => u.id === id)

        return user
    }

    async findByEmail(email: string): Promise<User> {

        const [user] = this.users.filter(u => u.email === email)

        return user
    }

    async create(user: ICreateUserDTO): Promise<User> {

        const newUser = new User()

        Object.assign(newUser, { id: uuid(), ...user })

        this.users.push(newUser)

        return newUser
    }

    async update(user: IUpdateUserDTO): Promise<User> {

        const currentIndex: number = this.users.findIndex(u => u.id === user.id)

        this.users[currentIndex] = user as User

        return this.users[currentIndex]
    }

    async delete(userId: string) {

        const [deletedUser] = this.users.filter(u => u.id === userId)
        const currentIndex: number = this.users.findIndex(u => u.id === userId)

        this.users.splice(currentIndex, 1)

        return deletedUser
    }
}
