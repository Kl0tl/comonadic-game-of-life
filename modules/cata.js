export default pattern => x =>
  x.cata(pattern);
