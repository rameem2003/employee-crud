import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import ShowEmployees from "./components/ShowEmployees";
import CreateNewEmployee from "./components/CreateNewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<ShowEmployees />} />
      <Route path="/create" element={<CreateNewEmployee />} />
      <Route path="/update" element={<UpdateEmployee />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
