export default class List {
  static of(x) {
    return cons(x)(nil());
  }

  static empty() {
    return nil();
  }

  map(f) {
    return this.chain(x => this.constructor.of(f(x)));
  }

  ap(xs) {
    return this.chain(f => xs.map(f));
  }
}

export class Cons extends List {
  constructor(x, xs) {
    super();
    this._head = x;
    this._tail = xs;
  }

  concat(ys) {
    return cons(this._head)(this._tail.concat(ys));
  }

  chain(f) {
    return f(this._head).concat(this._tail.chain(f));
  }
}

export const cons = x => xs =>
  new Cons(x, xs);

export class Lazy extends List {
  constructor(f) {
    super();
    this.run = f;
  }

  concat(xs) {
    return lazy(() => this.run().concat(xs));
  }

  chain(f) {
    return lazy(() => this.run().chain(f));
  }
}

export const lazy = f =>
  new Lazy(f);

export class Nil extends List {
  concat(xs) {
    return xs;
  }

  chain(f) {
    return nil();
  }
}

export const nil = () =>
  new Nil();
