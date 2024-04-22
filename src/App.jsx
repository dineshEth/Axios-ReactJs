import { useEffect } from "react";
import UserCard from "./components/UserCard"

function App() {

  const [users, setUsers] =  ([]);

  useEffect(()=>{

  },[])

  return (
    <div className="max-w-7xl mx-auto py-2">
      <h1 className="text-2xl my-4 font-medium text-center">Welcome to Axios Tutorial</h1>
      <div className="flex flex-row flex-wrap gap-2 justify-evenly items-center">
        {users &&  users.map((user) => (
          <div key={user.id} className="">
            <UserCard name="" city="" email="" contact="" website="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
