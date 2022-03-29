const getErrorMessage = (errorCode: string): string => {
    let message ='';
  switch (errorCode) {
    case 'E01': {
      message='Invalid username or password';
      break;
    }
    case 'E02': {
      message ='Too many attempts';
      break;
    }
    case 'E03': {
      message='Missing data';
      break;
    }
    default: {
      message='Something went wrong';
    }
  }
  return message;
};
console.log(getErrorMessage('E01'));
