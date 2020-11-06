import User from "../entities/user";

export default interface IUsersRepository {
    findOne(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(userId: string): Promise<User>;
}