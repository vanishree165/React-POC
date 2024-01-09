import { BaseModel } from "sjs-base-model";

export default class DummyModel extends BaseModel {
  constructor(data) {
    super();

    this.update(data);
  }
}
