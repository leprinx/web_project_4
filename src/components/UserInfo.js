class UserInfo {
    constructor({ name, job, avatar }) {
        this._name = name;
        this._job = job;
        this._avatar = avatar;
    }
    getUserInfo() {
        this._userObject = {
            name: this._name,
            job: this._job,
        };
        return this._userObject;
    }
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this._avatar.src = data.avatar;
        this._userId = data._id;
    }
    getId() {
        return this._userId;
      }
    changeAvatar(data){
        this._avatar.src = data;
    }
}
export default UserInfo;