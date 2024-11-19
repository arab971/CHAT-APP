import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="   border-r border-slate-500  md:p-4 flex flex-col  md:w-1/2 md:max-w-screen-md md:h-[550px] w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
