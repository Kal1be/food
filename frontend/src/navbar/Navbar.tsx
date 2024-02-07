
function Navbar() {
  return (
    <div className="py-2 px-4 flex justify-between items-center bg-white w-full shadow-sm">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="" className="w-16"/>
            <h3 className="text-xl font-medium">Association des Etudiants <br />
            Tchadien au Nigeria</h3>
        </div>
        <div>
          <ul className="flex justify-between w-[560px] text-xl font-medium">
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
            <li>help</li>
           
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar
