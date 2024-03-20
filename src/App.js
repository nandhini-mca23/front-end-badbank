import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.js';
import Create from './create.js';
import Withdraw from './withdraw.js';
import Alldata from './alldata.js';
import Deposit from './deposit.js';
import Home from './home.js';
import {HashRouter,Routes,Route} from 'react-router-dom';
import userContext from './context.js';



export default function App(){
  return(<>
  <Navbar/>
  <userContext.Provider value={{'user':
                                 [{name :'xyz', 
                                  email :'xyz@gmail.com',
                                  password :'123',
                                  amount :100}]}}>

  <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>} ></Route>
      <Route path='/deposit' element={<Deposit/>} ></Route>
      <Route path='/withdraw' element={<Withdraw/>} ></Route>
      <Route path='/alldata' element={<Alldata/>} ></Route>


    </Routes>
  </HashRouter>
  </userContext.Provider>

  </>)
}

