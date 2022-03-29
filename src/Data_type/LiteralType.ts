const count = 1; //const count:1
let channeName: 'easy';
let isActive: false;
let student1: null;
// count =2; Type '2' is not assignable to type '1'

const student2 = {
  id: 1,
  name: 'Tuan',
} as const;
const numberList1 = [1, 2, 3] as const;

function getStatusName(state: 'active') {
  console.log(state);
}
const s = 'active';
getStatusName(s);

let arr = [1, 2, 'test',null];
arr.push('tuan');
//arr.push(true);
