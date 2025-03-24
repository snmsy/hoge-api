import { Controller, Get } from '@nestjs/common';
import { PrefecturesService } from './prefectures.service';

@Controller('api/prefectures')
export class PrefecturesController {
  constructor(private readonly prefecturesService: PrefecturesService) {}

  @Get()
  async findAll() {
    return this.prefecturesService.findAll();
  }
}