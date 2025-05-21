import { Module } from '@nestjs/common';
import { UserController } from './presentation/http/controllers/user-controller';
import { CreateUserUseCase } from './application/use-cases/create-user-use-case';
import { DatabaseModule } from './infrastructure/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
