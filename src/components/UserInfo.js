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
        this._name.textContent = data.name;
        this._job.textContent = data.job;
    }
}

export default UserInfo;