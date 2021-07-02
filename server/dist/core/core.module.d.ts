import { DynamicModule } from '@nestjs/common';
export interface CoreModuleOptions {
    language: string;
    notUnderstandMessage: string;
    notKnowMessage: string;
    responseDelay: number;
}
export declare class CoreModule {
    static register(options: CoreModuleOptions): DynamicModule;
}
