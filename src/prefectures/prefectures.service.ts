import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrefecturesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const prefectures = await this.prisma.prefecture.findMany({
      orderBy: {
        id: 'asc',
      },
      select: {
        code: true,
        name: true,
      },
    });
    
    return prefectures;
  }
}