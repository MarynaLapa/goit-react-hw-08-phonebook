import RegistrationForm from 'components/partsOfPage/RegistrationForm/RegistrationForm'
import { useDispatch } from 'react-redux';
import { singUpThunk } from 'store/Auth/authThunk';

const RegistrationPage = () => {

  const dispatch = useDispatch()
  const register = (body) => {
    dispatch(singUpThunk(body))
  }
  return (
    <div>
      <RegistrationForm register={register}/>
    </div>
  )

}

export default RegistrationPage


