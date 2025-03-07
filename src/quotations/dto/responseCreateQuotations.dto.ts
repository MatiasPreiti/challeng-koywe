import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Currency } from 'src/utils/enum/CryptoCurrency.enum';

export class ResponseCreateQuotationDTO {
  @ApiProperty({ example: 'a1b2c3d4' })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ example: 'ARS' })
  @IsIn(Object.values(Currency))
  @IsNotEmpty()
  from: string;

  @ApiProperty({ example: 'ETH' })
  @IsIn(Object.values(Currency))
  @IsNotEmpty()
  to: string;

  @ApiProperty({ example: 1000000 })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ example: 0.0000023 })
  @IsNumber()
  @IsNotEmpty()
  rate: number;

  @ApiProperty({ example: 2.3 })
  @IsNumber()
  @IsNotEmpty()
  convertedAmount: number;

  @ApiProperty({ example: '2025-02-03T12:00:00Z' })
  @IsNotEmpty()
  timestamp: Date;

  @ApiProperty({ example: '2025-02-03T12:05:00Z' })
  @IsNotEmpty()
  expiresAt: Date;
}
