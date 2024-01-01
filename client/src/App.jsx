import { BrowserRouter , Routes ,Route }  from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from './components/Header'
import Profile from './pages/Profile';
import PrivateRoute from './components/privateRoute';

const App = () => {
  return <BrowserRouter>
  <Header/>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/Profile' element={<Profile />} />
        </Route>
  </Routes>
  </BrowserRouter>
}

export default App
