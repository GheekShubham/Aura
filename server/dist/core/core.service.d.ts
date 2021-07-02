import { OnApplicationBootstrap } from "@nestjs/common";
import { DiscoveryService, DiscoveredMethodWithMeta } from "@nestjs-plus/discovery";
import { NlpService } from "./nlp/nlp.service";
import { CoreModuleOptions } from "./core.module";
import { Observable } from "rxjs";
export declare class CoreService implements OnApplicationBootstrap {
    private nlpService;
    private discovery;
    private coreModuleOptions;
    instancesMap: Map<string, any>;
    nextCallback: Function | null;
    constructor(nlpService: NlpService, discovery: DiscoveryService, coreModuleOptions: CoreModuleOptions);
    onApplicationBootstrap(): Promise<void>;
    registerMessageHandler(method: DiscoveredMethodWithMeta<unknown>): void;
    runMessageHandler(text: string): Promise<string | Observable<string>>;
    getResponseText(response: string | string[]): string;
    dontKnowWhatToSay(text: string): string;
}
