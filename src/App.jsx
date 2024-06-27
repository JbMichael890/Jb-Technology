import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routes/router";

const App = () => {
  return (
    <div>
      {/* tested */}
      <RouterProvider router={mainRoute} />
    </div>
  );
};
export default App;
