interface Student {
  id: string;
  name: string;
  gender: 'male' | 'female';
  age: number;
}
const tuan: Student = {
  id: '007',
  name: 'Tuan Anh',
  gender: 'male',
  age: 22,
};
const ninh: Student = {
  id: '005',
  name: 'Duc Ninh',
  gender: 'male',
  age: 22,
};
function findStudentById(studentList: Student[], studentId: string) {
  if (studentList.length === 0) return undefined;
  return studentList.find((item) => item.id === studentId);
}
const student: Student[] = [tuan, ninh];

console.log(student.slice(0, 1));
console.log(findStudentById(student, '005'));
