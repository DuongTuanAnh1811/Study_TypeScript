//number enum
enum Status{
  PENDING,
  IN_PROGRESS,
  DONE,
  CANCELLED
}
const stats1: Status = Status.PENDING;
const stats2: Status =1;
const stats3: Status =-1;
console.log(Status[0]);
console.log(Status.DONE);

//string enum
enum MediaType{
  JSON ='applicaton/json',
  XML='applicaton/xml'
}
console.log(MediaType.JSON);// applicaton/json
//console.log(MediaType['applicaton/json']); //undefined
