import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('PrefecturesController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/prefectures (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/prefectures')
      .expect(200)
      .expect((res) => {
        // レスポンスが配列であることを確認
        expect(Array.isArray(res.body)).toBe(true);
        
        // 47都道府県が返されることを確認
        expect(res.body.length).toBe(47);
        
        // 各要素がcode, nameプロパティを持つことを確認
        expect(res.body[0]).toHaveProperty('code');
        expect(res.body[0]).toHaveProperty('name');
        
        // 特定の都道府県が含まれていることを確認
        const hokkaido = res.body.find(prefecture => prefecture.code === '01');
        expect(hokkaido).toBeDefined();
        expect(hokkaido.name).toBe('北海道');
        
        const tokyo = res.body.find(prefecture => prefecture.code === '13');
        expect(tokyo).toBeDefined();
        expect(tokyo.name).toBe('東京都');
        
        const okinawa = res.body.find(prefecture => prefecture.code === '47');
        expect(okinawa).toBeDefined();
        expect(okinawa.name).toBe('沖縄県');
        
        // コードが昇順に並んでいることを確認
        const codes = res.body.map(prefecture => prefecture.code);
        const sortedCodes = [...codes].sort();
        expect(codes).toEqual(sortedCodes);
      });
  });
});
