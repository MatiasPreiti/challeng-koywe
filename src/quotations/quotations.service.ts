import { Injectable, NotFoundException } from '@nestjs/common';
import { RequestCreateQuotationDTO } from './dto/requestCreateQuotations.dto';
import axios from 'axios';
import { ResponseCreateQuotationDTO } from './dto/responseCreateQuotations.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class QuotationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createQuotation(
    data: RequestCreateQuotationDTO,
  ): Promise<ResponseCreateQuotationDTO> {
    try {
      const { from, to, amount } = data;
      const rate = await this.getRate(from, to);

      const convertedAmount = amount * rate;

      const timestamp = new Date();
      const expiresAt = new Date(timestamp.getTime() + 5 * 60000);

      return this.prisma.quotation.create({
        data: {
          from,
          to,
          amount,
          rate,
          convertedAmount,
          timestamp,
          expiresAt,
        },
      });
    } catch (e) {
      console.error('create quote error:', e);
      throw new Error(e);
    }
  }

  async getQuotations() {
    return this.prisma.quotation.findMany();
  }

  private async getRate(from: string, to: string): Promise<number> {
    //EN ESTA FUNCION SE IMPLEMENTARIA LA FUNCION AXION PARA HACER FETCH A EL SERVICIO EXTERNO
    // Tambien en caso de que el servicio externo requiera mas complicaciones seria idea crear un modulo dedidado a este
    /*  const response = await axios.get(
        `https://api.exchange.cryptomkt.com/api/3/public/price/rate?from=${to}&to=${from}`,
      );
      return response.data.rate; */
    //EN VIRTUD DE NECESITAR CUENTA Y APIKEY PARA EL USO DE APIS QUE ACEPTEN DOS TIPOS DE DIVISA COMO TO Y FROM SE PROCEDE A CREAR MOCK

    return 100;
  }

  async getQuotationById(id: string) {
    const quotation = await this.prisma.quotation.findUnique({
      where: { id },
    });
    if (!quotation) {
      throw new NotFoundException('Quotation not found');
    }

    const currentTime = new Date();
    if (currentTime > new Date(quotation.expiresAt)) {
      throw new NotFoundException('Quotation has expired');
    }

    return {
      ...quotation,
      timestamp: new Date(quotation.timestamp),
      expiresAt: new Date(quotation.expiresAt),
    };
  }
}
