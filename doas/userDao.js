import { hashPassword } from "../helpers/authHelper.js";
import User from "../models/userModel.js";

class UserDao {
  async create(user) {
    user.password = await hashPassword(user.password, 10);
    return await User.create(user);
  }

  async getByEmail(email) {
    return await User.findOne({ email }).where({ isdelete: false });
  }
  async getById(id) {
    return await User.findById(id).where({ isdelete: false });
  }

  async getAll() {
    return await User.find({ isdelete: false });
  }

  async updateById(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true }).where({ isdelete: false });
  }

  async softDeleteById(id) {
    return await User.findByIdAndUpdate(id, { isdelete: true }, { new: true }).where({ isdelete: false });
  }
}

export default new UserDao();