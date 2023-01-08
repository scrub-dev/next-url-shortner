import Login from "./components/login";
import Logout from "./components/logout";
import Profile from "./components/profile";

export default function Home() {
  return (
    <>
      <Login/>
      <Logout/>
      <Profile/>
      {process.env.TEST}
    </>
  )
}
