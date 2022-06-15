import { Navigate, Route, Routes } from "react-router-dom";

import { PATH } from "enums";
import { Login, Profile } from "pages";
import { ReturnComponentType } from "types";
import { StyledImg } from "styles/style";

const App = (): ReturnComponentType => (
  <div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledImg />
    </div>

    <Routes>
      <Route path="*" element={<Navigate to={PATH.LOGIN} />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
    </Routes>
  </div>
);

export default App;
