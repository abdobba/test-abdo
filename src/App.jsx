import './App.css'
import Herader from './hrader.jsx'
import SideBar from './side-ber.jsx'
import BtnDev from './btndev.jsx'

function App() {
  return (
    <div className="">
      <Herader />
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-4">
          <SideBar />
          <SideBar />
        </div>

        {/* <BtnDev /> */}
        <BtnDev />
      </div>
    </div>
  )
}

export default App

