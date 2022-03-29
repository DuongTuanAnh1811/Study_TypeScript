interface Student2 {
  id: string | number;
  name: string;
}
interface Student2 {
  age?: number;
  gender: 'male' | 'female';
  class: 6 | 7 | 8 | 9;
}

const Thanh: Student2 = {
  id: 1,
  name: 'Thanh',
  gender: 'male',
  class: 7,
};
console.log(Thanh);
