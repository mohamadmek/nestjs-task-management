import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auth])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
