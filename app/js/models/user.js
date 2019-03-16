import ObjectHelper from '../helpers/object.js';

export default class User {
    constructor(data) {
        this.original = data || {};
        this.id = this.setId();
        this.login = this.setLogin();
       this.subscript = this.setSubscript();
        this.follower = this.setFollower();
        this.info = this.getFullInfo();
    }
setId() {
    const id = ObjectHelper.pickField(this.original, 'id');

        if (!id) {
           return;/* throw new Error('Not found subscription');*/
        }

        return id;
}
    setLogin() {
        const login= ObjectHelper.pickField(this.original, 'login');

        if (!login) {
            throw new Error('User needs login');
        }

        return login;
    }

    setSubscript() {
        const subscript = ObjectHelper.pickField(this.original, 'subscript');

        if (!subscript) {
           return;/* throw new Error('Not found subscription');*/
        }

        return subscript;
    }

     setFollower() {
        const follower= ObjectHelper.pickField(this.original, 'follower');

        if (!follower) {
            return;/*throw new Error('Not found follower');*/
        }

        return follower;
    }
 getId() {
        return this.id;
    }
    getLogin() {
        return this.login;
    }

    getSubscript() {
        return this.subscript;
    }

    getFollower() {
        return this.follower;
    }

    getFullInfo() {
        return `${this.getLogin()}`;
        /*`+`${this.getSubscript()} `+
         `${this.getFollower()} `;*/
    }
}
