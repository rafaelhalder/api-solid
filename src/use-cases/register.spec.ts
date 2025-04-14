import {expect,it,describe} from 'vitest';
import { RegisterUseCase } from './register';
import { compare } from 'bcryptjs';
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
  describe("Register Use Case", () => {
    it("Should be able to register", async () => {
      const usersRepository = new InMemoryUsersRepository
      const registerUseCase = new RegisterUseCase(usersRepository)

      const {user} = await registerUseCase.execute({
        name: "John Doe",
        email : "tse@tasest.com",
        password: "123456",
      })
      expect(user.id).toEqual(expect.any(String))
    });

    it("Register User", async () => {
      const usersRepository = new InMemoryUsersRepository
      const registerUseCase = new RegisterUseCase(usersRepository)

      const {user} = await registerUseCase.execute({
        name: "John Doe",
        email : "tse@tasest.com",
        password: "123456",
      })
      const isPasswordCorrectHashed = await compare('123456', user.password_hash)
      expect(isPasswordCorrectHashed).toBe(true)
    });


    it("should not be able to register with same email twice", async () => {
      const usersRepository = new InMemoryUsersRepository()
      const registerUseCase = new RegisterUseCase(usersRepository)
      const email = "tasdase@test.com"
      
      await registerUseCase.execute({
        name: "John Doe",
        email,
        password: "123456",
      })

      await expect(() => {
        return registerUseCase.execute({
          name: "John Doe",
          email,
          password: "123456",
        })  
      }).rejects.toBeInstanceOf(UserAlreadyExistsError)

    });
  })
