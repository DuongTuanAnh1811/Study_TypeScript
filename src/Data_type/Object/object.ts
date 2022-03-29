interface employee {
  id: number|string;
  firstName: String;
  lastName: String;
  age?: Number;//optional 
  jobTitle: String;
  gender: 'male'|'female';
}
const Tuan: employee = {
  id: 1,
  firstName: 'Tuan',
  lastName: ' Duong',
  jobTitle: 'Web Developer',
  gender: 'male',
};
console.log(Tuan);
