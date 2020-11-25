import ICreateUserDTO from "../dtos/iCreateUserDTO";
import IUpdateUserDTO from "../dtos/iUpdateUserDTO";
import User from "../entities/user";

export default interface IUsersRepository {
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    create(user: ICreateUserDTO): Promise<User>;
    update(user: IUpdateUserDTO): Promise<User>;
    delete(userId: string): Promise<User>;
}
