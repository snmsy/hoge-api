import { Injectable } from '@nestjs/common';
import {
  HealthCheckService,
  HealthIndicatorResult,
  HttpHealthIndicator,
  DiskHealthIndicator,
  MemoryHealthIndicator,
  HealthIndicatorStatus,
} from '@nestjs/terminus';

@Injectable()
export class HealthService {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  async check() {
    // 空の配列でヘルスチェックを実行
    // 必要に応じて以下のようなヘルスチェックを追加できます
    // () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    // () => this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.99 }),
    // () => this.memory.checkHeap('memory_heap', 1024 * 1024 * 1024),
    // () => this.memory.checkRSS('memory_rss', 1024 * 1024 * 1024),
    // () => this.checkCustom('api'),
    return this.health.check([]);
  }

  // カスタムヘルスチェックの例（必要に応じて使用）
  private async checkCustom(key: string): Promise<HealthIndicatorResult> {
    const isHealthy = true; // カスタムヘルスチェックロジックをここに実装
    
    const result = {
      [key]: {
        status: isHealthy ? 'up' as HealthIndicatorStatus : 'down' as HealthIndicatorStatus,
        timestamp: new Date().toISOString(),
      },
    };

    if (isHealthy) {
      return result;
    }
    
    throw new Error('API health check failed');
  }
}
