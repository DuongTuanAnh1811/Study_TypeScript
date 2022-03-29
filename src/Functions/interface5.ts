interface Animals {
  name: string;
}
interface Dog extends Animals  {
  honey: boolean;
};
const getDog = (name: string, honey: boolean): Dog => {
  const dog: Dog = {
    name: name,
    honey: honey,
  };
  return dog;
};
const dog = getDog('Dog', true);
console.log(dog.name);
console.log(dog.honey);
