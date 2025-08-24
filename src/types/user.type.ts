interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  profilePic: string;
  // add other user fields here
}

export interface ProfileResponse {
  data: {
    data: User;
  };
}
