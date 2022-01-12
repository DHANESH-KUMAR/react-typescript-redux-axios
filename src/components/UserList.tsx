import * as React from "react";
import { IUser } from "../models/user"

interface IProps {
    users: Array<IUser>;
    filterdUser?: Array<IUser> | null;
}


const UserList: React.FC<IProps> = ({ users, filterdUser }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#SNO</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {/* need to enhance this component, only take single userList or what we need to render here */}
                {filterdUser === null ?
                    users.map((user, i) => {
                        return (
                            <tr key={user.id}>
                                <td>{i + 1}</td>
                                <td> {user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><code> {JSON.stringify(user.address)}</code></td>
                                <td><code>{JSON.stringify(user.company)}</code></td>
                            </tr>);
                    }) :
                    filterdUser?.map((user, i) => {
                        return (
                            <tr key={user.id}>
                                <td>{i + 1}</td>
                                <td> {user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><code> {JSON.stringify(user.address)}</code></td>
                                <td><code>{JSON.stringify(user.company)}</code></td>
                            </tr>);
                    })

            }

            </tbody>
        </table>
    )
}

export default UserList;