module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement > 19) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
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
