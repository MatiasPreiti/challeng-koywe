import { Module } from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QuotationsService],
  exports: [QuotationsService],
})
export class QuotationsModule {}
