import { Module, CacheModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  User,
  UserDepartment,
  UserSocial,
} from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserDepartment,
      UserSocial,
    ]),
    ConfigService,
    CacheModule.register(),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
