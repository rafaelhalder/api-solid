import { Prisma, type User } from "generated/prisma"
export interface UsersRepository{
create(data: Prisma.UserCreateInput): Promise<User>
findByEmail(email: string): Promise<User | null>
}