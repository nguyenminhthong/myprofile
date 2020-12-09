declare namespace core {
    namespace utils {
        function setCookie(key: string, value: string, expireDate?: Date, path?: string): void;
        function getCookie(key: string): string;
    }

    namespace security {

    }

    namespace auth {
        function getToken(tokenKey: string) : string;
        function setToken(tokenKey: string, authToken: string, expireDate?: Date): void;
    }
}
