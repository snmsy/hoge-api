import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrefecturesService } from './prefectures.service';
import { PrefectureDto } from './dto/prefecture.dto';

@ApiTags('prefectures')
@Controller('api/prefectures')
export class PrefecturesController {
  constructor(private readonly prefecturesService: PrefecturesService) {}

  @Get()
  @ApiOperation({ summary: '都道府県一覧を取得' })
  @ApiResponse({
    status: 200,
    description: '都道府県一覧を返します',
    type: [PrefectureDto],
  })
  async findAll(): Promise<PrefectureDto[]> {
    return this.prefecturesService.findAll();
  }
}
