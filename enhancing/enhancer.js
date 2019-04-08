module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  // const repairedItem = new item();
  const repairedItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return repairedItem;
}

function get(item) {
  return { ...item };
}
