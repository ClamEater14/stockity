import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ItemsModule } from '../src/items/items.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ItemsModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/items (GET)', () => {
    return request(app.getHttpServer()).get('/items').expect(200);
  });
});
