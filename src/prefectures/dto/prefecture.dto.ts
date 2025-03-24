import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PrefectureDto {
  @ApiProperty({
    description: '都道府県コード',
    example: '01',
  })
  @Expose()
  code: string;

  @ApiProperty({
    description: '都道府県名',
    example: '北海道',
  })
  @Expose()
  name: string;

  constructor(partial: Partial<PrefectureDto>) {
    Object.assign(this, partial);
  }
}
