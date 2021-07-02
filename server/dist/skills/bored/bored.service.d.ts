import { HttpService } from '@nestjs/common';
export declare class BoredService {
    private http;
    constructor(http: HttpService);
    run(): Promise<any>;
}
