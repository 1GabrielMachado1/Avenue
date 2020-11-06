import User from "../entities/user"
import IUsersRepository from "./iUsersRepository"

export default class UsersRepository implements IUsersRepository {

    private users: User[] = []

    async findOne(id: string): Promise<User> {

        const [user] = this.users.filter(u => u.id === id)

        return user
    }

    async create(user: User): Promise<User> {

        this.users.push(user)

        return user
    }

    async update(user: User): Promise<User> {

        const currentIndex: number = this.users.findIndex(u => u.id === user.id)

        this.users[currentIndex] = user

        return this.users[currentIndex]
    }

    async delete(userId: string) {

        const [deletedUser] = this.users.filter(u => u.id === userId)
        const currentIndex: number = this.users.findIndex(u => u.id === userId)

        this.users.splice(currentIndex, 1)

        return deletedUser
    }
}