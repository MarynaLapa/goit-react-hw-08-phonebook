import { useNavigate, useLocation} from "react-router-dom"


const SignContent = ({ title, description }) => {

    const navigate = useNavigate()
    const location = useLocation()
  const handlerNavigate = () => {
      
    }
  return (
    <>
        <h2>{title}</h2>
        <p>{description}</p>
    </>
  )
}

export default SignContent