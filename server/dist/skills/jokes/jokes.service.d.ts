import { HttpService } from '@nestjs/common';
export declare class JokesService {
    private http;
    constructor(http: HttpService);
    tellJoke(): Promise<{
        text: any;
        nextCallback: () => any;
    }>;
}
