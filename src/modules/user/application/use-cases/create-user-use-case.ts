import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.respository';
import { User } from '../../domain/entities/user.entity';

import * as bcrypt from 'bcrypt'; // ✅ Importação correta
import { Role } from 'generated/prisma';

interface CreateUserRequwst {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
}
@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ name, email, password, phone, role }: CreateUserRequwst) {
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: passwordHashed,
      phone,
      role,
    });
    await this.userRepository.create(user);
    return user;
  }
}
