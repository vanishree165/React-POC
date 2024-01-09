import { BaseModel } from "sjs-base-model";

export default class UserList extends BaseModel {
  users = null;

  constructor(data) {
    super();
    this.update(data);
  }

  update(data) {
    super.update(data);
    this.users = data;
  }
}
