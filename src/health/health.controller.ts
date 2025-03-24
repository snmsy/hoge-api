import { Controller, Get } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: 'ヘルスチェック' })
  @ApiResponse({
    status: 200,
    description: 'アプリケーションの健全性情報を返します',
  })
  check() {
    return this.healthService.check();
  }
}
