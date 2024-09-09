import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout.tsx";
import { Context } from "./context/Context.tsx";
import ListPage from "./pages/listpage/ListPage.tsx";
import DetailPage from "./pages/detailpage/DetailPage.tsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<ListPage />} />
        <Route path="detail" element={<DetailPage />} />
      </Route>
    )
  );
  return (
    <Context>
      <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
