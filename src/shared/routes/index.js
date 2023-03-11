import { createBrowserRouter } from "react-router-dom";
import ListingPage from "../../pages/listingPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListingPage />
  }
]);
