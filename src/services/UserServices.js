import User from "../models/User";

class UserServices {
  async findOne(params = {}) {
    return await User.findOne(params);
  }

  async create(params = {}) {
    return await User.create(params);
  }
}

module.exports = new UserServices();
