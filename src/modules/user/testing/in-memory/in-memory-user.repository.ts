import { UserRepository } from '../../domain/repositories/user.respository';
import { User } from '../../domain/entities/user.entity';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    await Promise.resolve();
    this.users.push(user);
  }

  // async findAll(): Promise<User[]> {
  //   return this.users;
  // }

  // async findById(id: string): Promise<User | null> {
  //   return this.users.find(u => u.id === id) || null;
  // }

  // async update(user: User): Promise<User> {
  //   const index = this.users.findIndex(u => u.id === user.id);
  //   if (index >= 0) this.users[index] = user;
  //   return user;
  // }
}
