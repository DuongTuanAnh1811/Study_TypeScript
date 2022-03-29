interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}

interface Employee extends Identity, Contact {
  local?: string;
}
interface Customer extends BusinessPartner, Contact {}
const Ninh: Employee = {
  id: 1,
  name: 'Ninh',
  email: 'Ninh@gmail.com',
  phone: '12312444342',

};

console.log(Ninh);

