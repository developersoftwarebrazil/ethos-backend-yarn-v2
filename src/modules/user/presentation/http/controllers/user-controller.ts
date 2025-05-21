import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/user/application/dtos/create-user.dto';
import { CreateUserUseCase } from 'src/modules/user/application/use-cases/create-user-use-case';

@Controller('user')
export class UserController {
  constructor(private createUserCase: CreateUserUseCase) {}

  @Post()
  async createPost(@Body() body: CreateUserDto) {
    const { name, email, password, phone, role } = body;

    const user = this.createUserCase.execute({
      name,
      email,
      password,
      phone,
      role,
    });
    return user;
  }
}
