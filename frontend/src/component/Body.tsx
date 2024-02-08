import axios from "axios"
import { useEffect,useState } from "react"
function Body() {
    const [data,setData] = useState<any>([])
    const [error,setError] = useState("")
    useEffect(() => {
       axios.get("http://localhost:5000/api/user")
       .then(res=>setData(res.data))
       .catch((err)=>{
        setError(err.message)
       })
    }, [data])
    
  return (
    <div className="flex justify-between items-center px-3 break-before-auto overflow-x-hidden">
        <h1 className="text-2xl text-green-500">the request received is</h1>
        {data.map((user:any)=>{
            return(
                <div key={user.id} className="w-56 shadow-2xl p-4 m-4 ">
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <h4>{user.phone}</h4>
                </div>
            )
        })
        }

    </div>
  )
}

export default Body
