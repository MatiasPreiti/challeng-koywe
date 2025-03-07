import { Module } from '@nestjs/common';
import { QuotationsModule } from './quotations/quotations.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { QuotationsController } from './quotations/quotations.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [QuotationsModule, PrismaModule, AuthModule, UsersModule],
  controllers: [AppController, QuotationsController, AuthController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
