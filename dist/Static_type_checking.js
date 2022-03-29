"use strict";
const tuan = {
    id: '007',
    name: 'Tuan Anh',
    gender: 'male',
    age: 22,
};
const ninh = {
    id: '005',
    name: 'Duc Ninh',
    gender: 'male',
    age: 22,
};
function findStudentById(studentList, studentId) {
    if (studentList.length === 0)
        return undefined;
    return studentList.find((item) => item.id === studentId);
}
const student = [tuan, ninh];
console.log(findStudentById(student, '007'));
