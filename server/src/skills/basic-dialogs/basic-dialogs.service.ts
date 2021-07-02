import { Injectable } from '@nestjs/common';
import { MessageHandler, MessageText } from 'src/core';


@Injectable()
export class BasicDialogsService {

  @MessageHandler(['Hello', 'Hi', 'Hey'])
  sayHello() {
    return 'Hello world!';
  }
  
  @MessageHandler(['what can you do ?', 'Tell me your functionalities ?', 'Tell me about yourself ?'])
  whatICanDo() {
    return ['I am Aura and I can do tasks like making notes, greetings, entertaining the users by telling jokes, suggesting certain tasks !'];
  }

  @MessageHandler(['Bye', 'Goodbye', 'See you'])
  sayGoodbye() {
    return ['Bye', 'Goodbye', 'See you'];
  }

  @MessageHandler(['Who are you?', 'What\'s your name'])
  sayWhoIAm() {
    return {
      text: 'I\'m Aura, and you? What\'s your name?',
      nextCallback: (messageText: string) => `Nice to meet you, ${messageText}!`,
    }
  }

  @MessageHandler('Nice to meet you')
  niceToMeetYou() {
    return 'Thanks!';
  }
  
  @MessageHandler(['Open browser', 'open google'])
  openWindow() {
  	window.open("https://www.google.com","_blank");
  }

  @MessageHandler(['How are you?', 'What\'s up?', 'How\'s it going?'])
  sayHowIAm() {
    return {
      text: 'I\'m fine, thank you, and you?',
      nextCallback: () => `Nice!`,
    }
  }

  @MessageHandler(['Good morning', 'Good afternoon', 'Good evening'])
  sayGoodMorning(
    @MessageText() messageText: string,
  ) {
    if (messageText.includes('morning')) {
      return `Good morning`;
    }
    if (messageText.includes('afternoon')) {
      return `Good afternoon`;
    }
    return `Good evening`;
  }

  @MessageHandler('OK')
  sayOk() {
    return 'OK';
  }
  
  @MessageHandler(['Who developed you', 'who built you', 'tell me about developers'])
  whoBuildYou() {
    return ['Thanks to Shubham, Supriya Rani & Sanskar Srivastava, they are just Amazing !'];
  }

  @MessageHandler(['Thank you', 'Thanks'])
  sayYoureWelcome() {
    return ['Glad to help you!', 'You\'re welcome!', 'It\'s nothing!'];
  }

}
