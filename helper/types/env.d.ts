export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER : "chromium" | "firefox" | "webkit",
            ENV : "staging" | "prod" | "test",
            URL : string,
            HEAD : "true" | "false",
            USERNAME : string,
            PASSWORD : string
        }
    }
}
