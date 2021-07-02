import { TrimEntityOptions } from './nlp/nlp.types';
export declare function MessageHandler<T = string | string[]>(message: T): MethodDecorator;
export declare function MessageText(): ParameterDecorator;
export declare function TrimEntity(name: string, options: TrimEntityOptions): ParameterDecorator;
