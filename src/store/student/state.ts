
export interface IStudentInfo {
  idNumber: string,
  fname:string,
  mname:string,
  lname:string,
  religion:string,
  tribe:string,
  nationality:string,
  birthday:string,
  birthplace:string,
  father:string,
  mother:string,
  degree:string,
  yearLevel:string,
  academicAdviser:string,
  scholarship:string,
  academicStatus:string,
  admitted:string,
  homeAddress:string,
  campusAddress:string,
  mobileNumber:string,
  familyAnnualIncome:string,
  email:string,
  gender: 'Male' | 'Female',
}

export interface StudentStateInterface {
students: IStudentInfo[];
activeStudent?: IStudentInfo;
}

function state(): StudentStateInterface {
return {
  students: [
    {
      idNumber: '000',
      fname: 'Rohma',
      mname: 'so',
      lname: 'hyun',
      religion: 'Islam',
      tribe: 'Meranao',
      nationality: 'Filipino',
      birthday: 'April 11, 1999',
      birthplace: 'Marawi City',
      father: 'Mohammad Sani',
      mother: 'Noraida Indad',
      degree: 'BS Information System',
      yearLevel: '3rd year',
      academicAdviser: 'MAMA, Jasmin',
      scholarship: 'NONE',
      academicStatus: 'Paying',
      admitted: '1st semester',
      homeAddress: 'saguiaran, LDS',
      campusAddress: 'MSU Campus, Marawi City',
      mobileNumber: '09876543111',
      familyAnnualIncome: '00.00',
      email: 'kimyohan03@gmail.com',
      gender: 'Female',
    },
    {
      idNumber: '100',
      fname: 'kim',
      mname: 'soo',
      lname: 'hyun',
      religion: 'Islam',
      tribe: 'Meranao',
      nationality: 'Filipino',
      birthday: 'April 11, 1999',
      birthplace: 'Marawi City',
      father: 'Mohammad Sani',
      mother: 'Noraida Indad',
      degree: 'BS Information System',
      yearLevel: '3rd year',
      academicAdviser: 'MAMA, Jasmin',
      scholarship: 'NONE',
      academicStatus: 'Paying',
      admitted: '1st semester',
      homeAddress: 'saguiaran, LDS',
      campusAddress: 'MSU Campus, Marawi City',
      mobileNumber: '09876543111',
      familyAnnualIncome: '00.00',
      email: 'kimyohan03@gmail.com',
      gender: 'Female',
    },
  ]
}
};

export default state;
