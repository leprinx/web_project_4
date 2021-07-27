class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job;
    }
    getUserInfo() {
        this._userObject = {
            name: this._name,
            job: this._job
        };
        return this._userObject;
    }
    setUserInfo(data) {
        document.querySelector(".profile__author")
            .textContent = data.name;
        document.querySelector(".profile__subtitle")
            .textContent = data.job;
    }
}

export default UserInfo;