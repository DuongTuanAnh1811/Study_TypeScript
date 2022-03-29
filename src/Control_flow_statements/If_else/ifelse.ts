const checkSummer = (month: number): boolean => {
  if (month == 6 || month == 7 || month == 8) {
    return true;
  } else 
  return false;
};

if(checkSummer(7)){
    console.log('Summer');
}
else{
    console.log('it is not summer')
}
