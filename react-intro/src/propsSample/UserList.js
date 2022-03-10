import UserListRow from "./UserListRow"

const UserList = ({ userList }) => {
    return (
        <>
            {userList.map((user, key) => {
                return <UserListRow key={key} user={user} />
            })}
        </>
    )
}

export default UserList