import { compare } from 'bcrypt';
import { InMemoryUserRepository } from '../../testing/in-memory/in-memory-user.repository';
import { CreateUserUseCase } from './create-user-use-case';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: InMemoryUserRepository;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it('Should be able to create user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const user = await createUserUseCase.execute({
      name: 'Alice',
      email: 'alice@example.com',
      password: '123456',
      phone: '+55 19 999999999',
      role: 'ADMIN',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });
  it('Should be able to create user with password encrypted', async () => {
    const userWithoutPasswordEncryption = '123456';

    const user = await createUserUseCase.execute({
      name: 'Alice',
      email: 'alice@example.com',
      password: userWithoutPasswordEncryption,
      phone: '+55 19 999999999',
      role: 'ADMIN',
    });
    const userHasPasswordEncrypted = await compare(
      userWithoutPasswordEncryption,
      user.password,
    );
    expect(userHasPasswordEncrypted).toBeTruthy();
  });
});
