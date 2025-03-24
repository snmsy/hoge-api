import { Test, TestingModule } from '@nestjs/testing';
import { PrefecturesController } from './prefectures.controller';
import { PrefecturesService } from './prefectures.service';

describe('PrefecturesController', () => {
  let controller: PrefecturesController;
  let service: PrefecturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrefecturesController],
      providers: [
        {
          provide: PrefecturesService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PrefecturesController>(PrefecturesController);
    service = module.get<PrefecturesService>(PrefecturesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of prefectures', async () => {
      const mockPrefectures = [
        { code: '01', name: '北海道' },
        { code: '02', name: '青森県' },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(mockPrefectures);

      const result = await controller.findAll();
      expect(result).toEqual(mockPrefectures);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});