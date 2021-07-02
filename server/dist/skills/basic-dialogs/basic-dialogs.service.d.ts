export declare class BasicDialogsService {
    sayHello(): string;
    whatICanDo(): string[];
    sayGoodbye(): string[];
    sayWhoIAm(): {
        text: string;
        nextCallback: (messageText: string) => string;
    };
    niceToMeetYou(): string;
    openWindow(): void;
    sayHowIAm(): {
        text: string;
        nextCallback: () => string;
    };
    sayGoodMorning(messageText: string): "Good morning" | "Good afternoon" | "Good evening";
    sayOk(): string;
    whoBuildYou(): string[];
    sayYoureWelcome(): string[];
}
