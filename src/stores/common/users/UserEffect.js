import environment from "environment";
import EffectUtility from "../../../utilities/EffectUtility";
import DummyModel from "./models/DummyModel";
import UserList from "./models/UserList";

export default class UserEffect {
  static async requestUsersList(payload) {
    const endpoint =
      environment.api.admin + `/users`;
    return EffectUtility.getToModel(UserList, endpoint, null);
  }
  static async deleteUser(payload) {
    const endpoint = environment.api.admin + `/users/${payload}`;
    return EffectUtility.delToModel(DummyModel, endpoint, "");
  }
  static async requestEditUser(payload) {
    const endpoint = environment.api.admin + `/users/${payload.id}`;
    return EffectUtility.putToModel(DummyModel, endpoint, payload);
  }
  static async requestAddUser(payload) {
    const endpoint = environment.api.admin + `/users`;
    return EffectUtility.postToModel(DummyModel, endpoint, payload);
  }
}
