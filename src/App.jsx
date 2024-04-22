import { useEffect, useState } from "react";
import UserCard from "./components/UserCard"
import axios from "axios";

function App() {

  const [users, setUsers] =  useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((data)=> data.data)
    .then((data) => {
      setUsers(data)
    })
    .finally(()=>{
      setLoader(false)
    });
  },[])

  return (
    <>
    {Loader ? <h1 className="text-2xl flex flex-row justify-center items-center h-screen w-screen font-bold text-white">Loading...</h1> : (
      <div className="max-w-7xl mx-auto p-2">
      <h1 className="text-4xl my-4 font-bold text-center">Welcome to Axios Tutorial</h1>
      <div className="flex flex-row my-8 flex-wrap gap-2 justify-evenly items-center">
        {users &&  users.map((user) => (
          <div key={user.id} className="max-w-[320px] w-full">
            <UserCard name={user.name} city={user.address.city} email={user.email} contact={user.phone} website={user.website} />
          </div>
        ))}
      </div>
    </div>
    )}
    </> 
  )
}

export default App
