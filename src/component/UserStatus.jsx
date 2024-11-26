const UserStatus = ({LoggedIn,isAdmin}) => {
  if(LoggedIn && isAdmin){
    return <h1>Hello Admin</h1>
  }else{
    return <h1>Hello User</h1>
  }
};

export default UserStatus;