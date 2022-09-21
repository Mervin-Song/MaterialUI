import './App.css';
import SharedLayout from './components/SharedLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import PetOwnerLandingPage from './components/petowner/PetOwnerLandingPage';
import Login from './components/Auth/Login';
import Error from './components/Error';
import SignInOutTab from './components/Auth/SignInOutTab';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element = {<PetOwnerLandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignInOutTab />} />
        <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
