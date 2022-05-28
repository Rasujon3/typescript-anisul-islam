// enum - store constants: duplicate value is not allowed here
// enum types: numeric, string, hetergenous
// 1. numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
    // GetData,
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.readData);
// console.log(RequestType["readData"]);
// 2. string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_data";
    RequestType2["deleteData"] = "delete_data";
    RequestType2["savedData"] = "Saved_data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.deleteData);
// console.log(RequestType2["deleteData"]);
// 2. herergenus enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_data";
    RequestType3["deleteData"] = "delete_data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
