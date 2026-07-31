//1
function usersArrayToMap(users) {
  const result = new Map();
  for (const user of users) {
    result.set(user.name, user.age);
  }
  return result;
}

//2
function getDuplicateNums(numbers) {
  const set = new Set(numbers);
  const result = [];
  for (const i of set) {
    result.push(i);
  }
  return result;
}

//4
function getIds(objectsArray) {
  const setIds = new Set();

  for (const i of objectsArray) {
    if (i && i.id !== undefined) {
      setIds.add(i.id);
    }
  }
  
  return setIds;
}