interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number:number) => number; 
    getManagerName(number:number): string; 
}


interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}

function deleteKeyValue(key:number):void { 
    console.log('Key deleted.');
}
    


let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
kvp = deleteKeyValue;
kvp(3,'John');
