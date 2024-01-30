import { Button, LogOut } from "components/styled/formStyled"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutThunk } from "store/Auth/authThunk"
import { profileSelector } from "store/Auth/selectors"


const Logout = () => {
  const profile = useSelector(profileSelector)
  const navigate = useNavigate()
  const distpatch = useDispatch()

  const handlerLogout = () => { 
    distpatch(logoutThunk())
    navigate('/')
  }
  
  return (
   <LogOut>
      <p>{profile.name}</p>
      <Button onClick={handlerLogout}>Log out</Button>
    </LogOut>
  )
}

export default Logout