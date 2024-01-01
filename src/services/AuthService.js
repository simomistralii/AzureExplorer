import { PublicClientApplication } from '@azure/msal-browser';
import { config } from './config';

class AuthService {
    constructor() {
        this.PublicClientApplication = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                redirectUri: config.redirectUri,
                authority: config.authority
            },
            cache: {
                cacheLocation: 'sessionStorage',
                storeAuthStateInCookie: true,
            }
        });

        this.PublicClientApplication.initialize();
    }

    async login() {
        try {
            console.log("Trying to login...");
            const loginResponse = await this.PublicClientApplication.loginPopup({
                scopes: config.scopes,
                prompt: "select_account"
            });

            console.log("Login response:", loginResponse);

            if (loginResponse && loginResponse.account) {
                console.log("Login successful");
                console.log(loginResponse)
                return loginResponse;  //loginResponse.account;
            } else {
                console.log("Login not successful");
                throw new Error("Login was not successful.");
            }
        } catch (err) {
            console.error("Login error:", err);
            throw err;
        }
    }

    logout() {
        this.PublicClientApplication.logout();
    }

    async getUserInfo() {
        const account = this.PublicClientApplication.getActiveAccount();
        if (account) {
            // You can customize this method based on your needs to fetch more user information
            // For now, it returns basic user information
            return {
                username: account.username,
                email: account.idTokenClaims.email
            };
        } else {
            throw new Error("User not authenticated");
        }
    }

    isAuthenticated() {
        const accounts = this.PublicClientApplication.getAllAccounts();
        return accounts.length > 0; // Returns true if there is at least one account, indicating authentication
    }

    storeTokens(tokens) {
        localStorage.setItem('authTokens', JSON.stringify(tokens));
      }
    
    getStoredTokens() {
      const storedTokens = localStorage.getItem('authTokens');
      return storedTokens ? JSON.parse(storedTokens) : null;
    }

    clearStoredTokens() {
      localStorage.removeItem('authTokens');
    }
}

export default AuthService;