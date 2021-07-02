import { Test, TestingModule } from '@nestjs/testing';
import { OpenBrowserService } from './open-browser.service';

describe('OpenBrowserService', () => {
  let service: OpenBrowserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenBrowserService],
    }).compile();

    service = module.get<OpenBrowserService>(OpenBrowserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
