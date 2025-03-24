import { Module } from '@nestjs/common';
import { PrefecturesController } from './prefectures.controller';
import { PrefecturesService } from './prefectures.service';

@Module({
  controllers: [PrefecturesController],
  providers: [PrefecturesService],
})
export class PrefecturesModule {}