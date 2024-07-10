import {
  ConflictException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { hash } from 'bcryptjs'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, email, password } = body
    // const name = 'John Doe'
    // const email = 'johndoe@example.com'
    // const password = '123456'

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSameEmail) {
      throw new ConflictException(
        'User with same e-mail address already exists.',
      )
    }

    const hashedPassword = await hash(password, 8)

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
  }
}
