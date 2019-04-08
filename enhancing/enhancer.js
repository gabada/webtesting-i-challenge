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
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement > 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 10
    };
  } else {
    return { ...item };
  }
}

function repair(item) {
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
