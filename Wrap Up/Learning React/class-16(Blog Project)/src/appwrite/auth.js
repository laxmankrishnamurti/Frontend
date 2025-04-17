import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const account = await this.account.create(ID.unique(), email, password, name)
            if (account) {
                //call the login method to login the user 
                return this.logIn({ email, password })
            } else {
                console.error("AuthService :: createAccount :: failed to create a new user account", account);
            }
        } catch (error) {
            console.error("AuthService :: createAccount :: error :: ", error)
        }
    }

    async logIn({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error("Application :: logIn :: ", error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Application :: getCurrentUser :: ", error)
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.error("Application :: logout :: ", error)
        }
    }

}

const authService = new AuthService();

export default authService