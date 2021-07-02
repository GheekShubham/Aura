import { Injectable } from '@nestjs/common';
import { MessageHandler, MessageText } from 'src/core';

@Injectable()
export class OpenBrowserService {

  @MessageHandler([
    'open browser',
    'browser',
    'open google chrome',
    'open firefox',
  ])
  browser() {
    	window.open('https://www.google.com', '_blank');
  }
}
