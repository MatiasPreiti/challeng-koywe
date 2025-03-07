import {
  Controller,
  Get,
  Req,
  HttpStatus,
  Headers,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuotationsService } from './quotations.service';
import { RequestCreateQuotationDTO } from './dto/requestCreateQuotations.dto';
import { ResponseCreateQuotationDTO } from './dto/responseCreateQuotations.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Quotations')
@Controller('quote')
export class QuotationsController {
  constructor(private readonly quotationsService: QuotationsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: 'Get All Quotations',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Details fetched successfully',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  async getQuotations(@Headers('authorization') authorization: string) {
    return await this.quotationsService.getQuotations();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({
    summary: 'Create Quotations',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Quotation created successfully',
    type: ResponseCreateQuotationDTO,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  async createQuotation(
    @Headers('authorization') authorization: string,
    @Body() data: RequestCreateQuotationDTO,
  ): Promise<ResponseCreateQuotationDTO> {
    return await this.quotationsService.createQuotation(data);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get Quotation by ID',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Quotation fetched successfully',
    type: ResponseCreateQuotationDTO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Quotation not found or has expired',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  async getQuotationById(
    @Headers('authorization') authorization: string,
    @Param('id') id: string,
  ): Promise<ResponseCreateQuotationDTO> {
    return await this.quotationsService.getQuotationById(id);
  }
}
