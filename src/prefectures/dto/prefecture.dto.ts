import { ApiProperty } from '@nestjs/swagger';

export class PrefectureDto {
  @ApiProperty({
    description: '都道府県コード',
    example: '01',
  })
  code: string;

  @ApiProperty({
    description: '都道府県名',
    example: '北海道',
  })
  name: string;
}
