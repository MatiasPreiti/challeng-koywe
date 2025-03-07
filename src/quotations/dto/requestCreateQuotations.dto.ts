import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Currency } from 'src/utils/enum/CryptoCurrency.enum';

export class RequestCreateQuotationDTO {
  @ApiProperty({ example: 100000 })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ example: 'ARS' })
  @IsIn(Object.values(Currency))
  @IsNotEmpty()
  from: string;

  @ApiProperty({ example: 'ETH' })
  @IsIn(Object.values(Currency))
  @IsNotEmpty()
  to: string;
}
