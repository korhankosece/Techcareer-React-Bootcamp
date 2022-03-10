const UserListRow = ({ user }) => {
    return (
        <>
            <div>
                <h1>{user.id}</h1>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
        </>
    )
}

export default UserListRow