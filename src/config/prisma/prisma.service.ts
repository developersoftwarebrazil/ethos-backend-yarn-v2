import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super(); // ✅ Chamada obrigatória ao construtor da superclasse
  }

  async onModuleInit() {
    await this.$connect();
  }
}
