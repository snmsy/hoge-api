import { Injectable } from '@nestjs/common';
import { HealthCheckService, PrismaHealthIndicator } from '@nestjs/terminus';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(
    private health: HealthCheckService,
    private prismaHealthIndicator: PrismaHealthIndicator,
    private prisma: PrismaService,
  ) {}

  async check() {
    return this.health.check([
      () => this.prismaHealthIndicator.pingCheck('database', this.prisma),
    ]);
  }
}
