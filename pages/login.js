import Login from "../components/Login/Login";
import {DarkModeSwitch} from "../components/DarkModeSwitch";
import {getSession} from "next-auth/client";

export default function login(){
    return(
        <div>

           <Login/>
        </div>
    )
}
export async function getServerSideProps(context){
  const session=await getSession({req:context.req})
  if (session){
    return {
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return {
    props:{
      session
    }
  }
}