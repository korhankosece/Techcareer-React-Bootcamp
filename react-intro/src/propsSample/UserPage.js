import { users } from '../data/users'
import UserList from './UserList';

const UserPage = () => {
    return (
        <UserList userList={users} />
    )
}

export default UserPage