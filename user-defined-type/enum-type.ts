// enum - store constants: duplicate value is not allowed here
// enum types: numeric, string, hetergenous

// 1. numeric enum
enum RequestType {
  readData = 1,
  saveData = 3,
  deleteData,
  // GetData,
}

// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType["readData"]);

// 2. string enum
enum RequestType2 {
  readData = "Read_data",
  deleteData = "delete_data",
  savedData = "Saved_data",
}

// console.log(RequestType2.deleteData);
// console.log(RequestType2["deleteData"]);

// 2. herergenus enum
enum RequestType3 {
  readData = "Read_data",
  deleteData = "delete_data",
  id = 101,
}

console.log(RequestType3);
