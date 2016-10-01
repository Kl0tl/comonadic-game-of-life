import { cons, head, iterate, repeat, reverse, splitAt, tail } from 'List';

export default class ListZipper {
  constructor(_left, _value, _right) {
    this._left = _left;
    this._value = _value;
    this._right = _right;
  }

  map(f) {
    return new ListZipper(
      this._left.map(f),
      f(this._value),
      this._right.map(f)
    );
  }

  extract() {
    return this._value;
  }

  duplicate() {
    return iterateZ(left)(right)(this);
  }
}

export const at = n => x => xs => {
  const [_left, rest] = splitAt(n)(xs);
  return new ListZipper(reverse(_left).concat(repeat(x)),
    head(rest), tail(rest).concat(repeat(x)));
};

export const left = z =>
  new ListZipper(tail(z._left), head(z._left),
    cons(z._value)(z._right));

export const right = z =>
  new ListZipper(cons(z._value)(z._left),
    head(z._right), tail(z._right));

const iterateZ = f => g => x =>
  new ListZipper(tail(iterate(f)(x)), x, tail(iterate(g)(x)));
export { iterateZ as iterate };
