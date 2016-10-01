import { map } from 'Functor';
import { fromArray, repeat } from 'List';
import { left, right, iterate, at } from 'ListZipper';

export default class ListZipper2d {
  constructor(_value) {
    this._value = _value;
  }

  map(f) {
    return new ListZipper2d(this._value.map(map(f)));
  }

  extract() {
    return this._value.extract().extract();
  }

  duplicate() {
    return new ListZipper2d(iterate(up)(down)(this)
      .map(iterate(left2d)(right2d)));
  }
}

const left2d = z =>
  new ListZipper2d(z._value.map(left));
export { left2d as left };

const right2d = z =>
  new ListZipper2d(z._value.map(right));
export { right2d as right };

export const up = z =>
  new ListZipper2d(left(z._value));

export const down = z =>
  new ListZipper2d(right(z._value));
