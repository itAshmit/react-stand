const UserStatus = ({loggedIn,isAdmin}) => {
  if(loggedIn && isAdmin){
    return <h1>Hello Admin</h1>
  }
  else{
    return <h1>Hello User</h1>
  }
};

export default UserStatus;