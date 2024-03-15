import { useSelector } from "react-redux"
import { globalLoadingSelector } from "store/Root/selectors"

// .loader {
//   position: relative;
//   width: 100px;
//   height: 100px;
// }

// .loader:before , .loader:after{
//   content: '';
//   border-radius: 50%;
//   position: absolute;
//   inset: 0;
//   box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
// }
// .loader:after {
//   box-shadow: 0 2px 0 #FF3D00 inset;
//   animation: rotate 2s linear infinite;
// }

// @keyframes rotate {
//   0% {  transform: rotate(0)}
//   100% { transform: rotate(360deg)}
// }

const Loader = () => {
    const isLoading = useSelector(globalLoadingSelector)
  return (
    <>
        {isLoading && <span></span>}
    </>
  )
}

export default Loader