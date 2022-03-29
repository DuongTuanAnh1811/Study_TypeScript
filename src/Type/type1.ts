type Status1 = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

type Animal = {
  name: string;
};
type Bear = Animal & {
  honey: boolean;
};
const getBear = (name: string, honey: boolean): Bear => {
  const bear: Bear = {
    name: name,
    honey: honey,
  };
  return bear;
};
const bear = getBear('Bear', true);
console.log(bear.name);
console.log(bear.honey);

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
