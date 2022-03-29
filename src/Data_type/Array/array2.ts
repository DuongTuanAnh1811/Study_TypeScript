 let num: number[] = [
      3, 4, 5, 6, 7, 68, 66, 71, 90, 2, 1, 11, 30, 22, 18, 32, 70,
    ];
    let newNum = num.slice();
  
    let numSort1 = num.slice().sort((a, b) => a - b);
    let numSort2 = num.slice().sort((a, b) => b - a);
    let numAdd = newNum.splice(1, 3, 45, 67, 33);
    let numReverse = num.slice().reverse();
    let numDouble = num.slice().map((item) => item * 2);
    let numFilter = num.slice().filter((item) => item <= 22);
    let numJoin = num.slice().join('');
  
    console.log(`num ${num}`);
    console.log(`num reverse ${numReverse}`);
    console.log(`num join ${numJoin}`);
    console.log(`num value <= 22 ${numFilter}`);
    console.log(`num double ${numDouble}`);
    console.log(`num add ${numAdd}`);
    console.log(`new num ${newNum}`);
    console.log(`num sort in ascending order ${numSort1}`);
    console.log(`num sort in descending order ${numSort2}`);