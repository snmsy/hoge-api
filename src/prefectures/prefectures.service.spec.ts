import { Test, TestingModule } from '@nestjs/testing';
import { PrefecturesService } from './prefectures.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PrefecturesService', () => {
  let service: PrefecturesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrefecturesService,
        {
          provide: PrismaService,
          useValue: {
            prefecture: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<PrefecturesService>(PrefecturesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of prefectures', async () => {
      const mockPrefectures = [
        { id: 1, code: '01', name: '北海道' },
        { id: 2, code: '02', name: '青森県' },
      ];

      jest.spyOn(prismaService.prefecture, 'findMany').mockResolvedValue(mockPrefectures);

      const result = await service.findAll();
      expect(result).toEqual(mockPrefectures);
      expect(prismaService.prefecture.findMany).toHaveBeenCalledWith({
        orderBy: { id: 'asc' },
        select: { code: true, name: true },
      });
    });
  });
});