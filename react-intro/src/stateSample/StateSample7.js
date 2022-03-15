import { users } from "../data/users"
import { useState } from 'react'

const StateSample7 = () => {
    const [userList, setUserList] = useState(users);

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const [userCount, setUserCount] = useState(0)

    const addNewUser = () => {
        const newUser = {
            name,
            username,
            email
        }
        // setUserList([...userList, newUser])
        setUserList(prev => [...prev, newUser])
    }

    const deleteUser = (id) => {
        id && setUserList(prev => {
            return prev.filter(q => q.id !== id)
        })
    }

    const getUser = () => {
        setUserList(prev => prev.slice(0, userCount))
    }

    return (
        <>
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button onClick={addNewUser}>Add New User</button>
                </div>
            </div>

            <div>
                <div>
                    <label htmlFor="">Count:</label>
                    <input type="text" onChange={(e) => setUserCount(e.target.value)} />
                </div>
                <div>
                    <button onClick={getUser}>get users</button>
                </div>

            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>

                {
                    userList.map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }


            </table>
        </>
    )
}

export default StateSample7
