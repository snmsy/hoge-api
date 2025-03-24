import { Test, TestingModule } from '@nestjs/testing';
import { PrefecturesController } from './prefectures.controller';
import { PrefecturesService } from './prefectures.service';
import { PrefectureDto } from './dto/prefecture.dto';

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
    it('should return an array of prefecture DTOs', async () => {
      const mockPrefectures = [
        { code: '01', name: '北海道' },
        { code: '02', name: '青森県' },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(mockPrefectures);

      const result = await controller.findAll();
      
      // Check that we have the right number of items
      expect(result.length).toEqual(mockPrefectures.length);
      
      // Check that each item is an instance of PrefectureDto
      result.forEach(item => {
        expect(item).toBeInstanceOf(PrefectureDto);
      });
      
      // Check that the data is correct
      expect(result[0].code).toEqual(mockPrefectures[0].code);
      expect(result[0].name).toEqual(mockPrefectures[0].name);
      expect(result[1].code).toEqual(mockPrefectures[1].code);
      expect(result[1].name).toEqual(mockPrefectures[1].name);
      
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});