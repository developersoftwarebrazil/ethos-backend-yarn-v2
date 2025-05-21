import { User } from 'src/modules/user/domain/entities/user.entity';
import { UserRepository } from 'src/modules/user/domain/repositories/user.respository';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const userRaw = PrismaUserMapper.toPrisma(user);
    await this.prisma.user.create({
      data: userRaw,
    });
  }
}
