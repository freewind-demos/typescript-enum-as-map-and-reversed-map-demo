enum FieldIdTypes {
  Text = 'aa',
  List = 11,
  Switch = 33
}

console.log(FieldIdTypes['Text']);
console.log(FieldIdTypes[11]);
//console.log(FieldIdTypes['aa']);  // compilation error

