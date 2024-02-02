// // 本地持久化 token:{refresh_token, token}
// // 消除魔法字符串
// const TOKEN_KEY = 'itcast_geek_h5'
// export function getToken () : any {
//     return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}')
// }
// // 保存token
// export function setToken (token: any) {
//     localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
// }
// //删除token
// export function removeToken () :void {
//     localStorage.removeItem(TOKEN_KEY)
// }
// //判断token
// export function hasToken () :boolean {
//     return !!getToken().token //双重取反====强制转换为布尔类型
// }


class AuthService {
    private static TOKEN_KEY = 'itcast_geek_h5';

    public static setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
    }

    public static getToken(): any | null {
        return JSON.parse(localStorage.getItem(this.TOKEN_KEY) || '{}')
    }

    public static removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    public static hasToken(): boolean {
        return !!this.getToken().token //双重取反====强制转换为布尔类型
    }
}

export default AuthService;