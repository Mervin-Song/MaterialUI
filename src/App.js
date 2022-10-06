import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import PetOwnerLandingPage from "./components/petowner/PetOwnerLandingPage";
import Login from "./components/Auth/Login";
import Error from "./components/Error";
import SignInOutTab from "./components/Auth/SignInOutTab";
import PetOwnerAddPet from "./components/petowner/PetOwnerAddPet";
import PetOwnerEditPet from "./components/petowner/PetOwnerEditPet";
import ForgotPassword from "./components/Auth/ForgotPassword";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignInOutTab />} />

            <Route
              path="/signin/petownerlandingpage"
              element={<PetOwnerLandingPage />}
            />
            <Route
              path="/signin/petownerlandingpage/addpet"
              element={<PetOwnerAddPet />}
            />
            <Route
              path="/signin/petownerlandingpage/editpet"
              element={<PetOwnerEditPet />}
            />

            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
