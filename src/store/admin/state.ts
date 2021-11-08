
export interface IAdminInfo {
  idNumber : string,
  Fname : string,
  Mname : string,
  Lname : string,
  username : string,
  password : string,
  email : string,
  status: string,
  dateCreated: string,
  role : 'Admin' | 'Chairperson',


}

export interface AdminStateInterface {
admins: IAdminInfo[];
activeStudent?: IAdminInfo;
}

function state(): AdminStateInterface {
return {
  admins: [
    {
      idNumber: '1000',
      Fname: 'Rohma',
      Mname: 'so',
      Lname: 'hyun',
      username: 'rohma',
      password: 'p@ssw0rd',
      email: 'soohyun01@gmail.com',
      status: 'active',
      role: 'Admin',
      dateCreated: 'December 01, 2021'

    }

  ]
}
};

export default state;
