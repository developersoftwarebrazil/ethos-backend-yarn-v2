import { Role } from 'generated/prisma';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: Role;
}
