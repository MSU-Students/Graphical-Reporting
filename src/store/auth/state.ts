export interface UserProfile {
  name: string;
  username: string;
  role: 'admin' | 'chair';
}
export interface AuthStateInterface {
  activeUser?: UserProfile;
}

function state(): AuthStateInterface {
  return {

  };
}

export default state;
