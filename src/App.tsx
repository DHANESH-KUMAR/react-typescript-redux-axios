import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { IUser } from './models/user';
import { IApplicationState, actionCreator } from './state';
import UserList from './components/UserList';
function App() {

  const dispatch = useDispatch();
  const { Users, GET_ALL_ERR_MSG, GET_ALL_LOADER } = useSelector((state: IApplicationState) => state.user);
  const [filterdUsers, setFilterUsers] = React.useState<Array<IUser>|null>(null);
  const [text, setText] = React.useState<string>("");

  React.useEffect(() => {
    //need to call api
    dispatch(actionCreator.User_AC.getAllUsers()).then((x: any) => {
      console.log(Users)
      console.log(x)
    });
  }, []);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text !== "") {
      setFilterUsers(Users.filter(u => u.name.indexOf(text) !== -1));
    } else {
      setFilterUsers([...Users]);
    }
  }

  return (
    <div className="container mt-5">
      <div className='col-md-12'>
        {
          GET_ALL_LOADER ?
            <em>Loading....</em> :
            <>
              <div className='row'>
                <div className="input-group mb-3">
                  <input type="text" onChange={(e) => setText(e.target.value)} className="form-control" placeholder="Search By Name" />
                  <button onClick={handleSearch} className="input-group-text btn btn-primary">Search</button>
                </div>
              </div>
              <div className='row'>
                <UserList filterdUser={filterdUsers} users={Users}  />
              </div>
            </>
        }
        {
          GET_ALL_ERR_MSG !== "" ? <p>{GET_ALL_ERR_MSG}</p> : undefined
        }

      </div>
    </div>
  );
}

export default App;
