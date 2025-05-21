import { User } from 'src/modules/user/domain/entities/user.entity';
import { User as UserRaw } from '../../../../../../../generated/prisma';
export class PrismaUserMapper {
  static toPrisma({
    id,
    name,
    email,
    password,
    phone,
    role,
    createdAt,
    updatedAt,
  }: User): UserRaw {
    return {
      id,
      name,
      email,
      password,
      phone,
      role,
      createdAt,
      updatedAt,
    };
  }
}
