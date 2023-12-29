import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom' // this navigate is a component

export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/> // if current user then render child - profile page otherwise redirect to signin page
}
