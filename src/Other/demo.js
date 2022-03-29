function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };
  return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorMessage('E01'));

function classifyStudent(mark){
    if(mark<0||mark>10) return ''
}

