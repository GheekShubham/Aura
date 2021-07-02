import { NlpResult, TrimEntityOptions } from "./nlp.types";
import { CoreModuleOptions } from "../core.module";
export declare class NlpService {
    nlpManager: any;
    language: string;
    constructor(options: CoreModuleOptions);
    addTrimEntity(name: string, options: TrimEntityOptions): void;
    addDocument(utterance: string, intent: string): void;
    train(): Promise<void>;
    process(utterance: string): Promise<NlpResult>;
}
