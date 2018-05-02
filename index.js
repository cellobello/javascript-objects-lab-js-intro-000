var recipes = {eggs: '2', bagel: '1', creeamCheese: '2spreads'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign ({}, object, {[key]: value});
    
    return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object);
  delete newRecipes[key];
    return newRecipes;
}

