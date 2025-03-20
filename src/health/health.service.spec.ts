import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';
import { HealthCheckService, HttpHealthIndicator, DiskHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';

describe('HealthService', () => {
  let service: HealthService;
  let healthCheckService: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService,
        {
          provide: HealthCheckService,
          useValue: {
            check: jest.fn().mockResolvedValue({
              status: 'ok',
              info: {},
              error: {},
              details: {},
            }),
          },
        },
        {
          provide: HttpHealthIndicator,
          useValue: {
            pingCheck: jest.fn(),
          },
        },
        {
          provide: DiskHealthIndicator,
          useValue: {
            checkStorage: jest.fn(),
          },
        },
        {
          provide: MemoryHealthIndicator,
          useValue: {
            checkHeap: jest.fn(),
            checkRSS: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HealthService>(HealthService);
    healthCheckService = module.get<HealthCheckService>(HealthCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('check', () => {
    it('should return health status', async () => {
      const result = await service.check();
      
      expect(result).toHaveProperty('status', 'ok');
      expect(result).toHaveProperty('info');
      expect(result).toHaveProperty('error');
      expect(result).toHaveProperty('details');
      expect(healthCheckService.check).toHaveBeenCalledWith([]);
    });
  });
});
