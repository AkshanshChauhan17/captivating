import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AiOutlineSearch } from 'react-icons/ai'

let links = [
  {
    name: "ABOUT US"
  }, {
    name: "SERVICES"
  }, {
    name: "PORTFOLIO"
  }, {
    name: "INFO & INSPO"
  }, {
    name: "CONTACT"
  }
];

function App() {
  return (
    <div>
      <div className="navigation">
        <div className="logo"></div>
        <div className="right">
          <div className="links">
            {
              links.map((link, i)=>{
                return <div className="link" key={i}>{link.name}</div>
              })
            }
          </div>
          <AiOutlineSearch className='search' />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
