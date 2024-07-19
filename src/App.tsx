import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";
import { RecoilRoot } from "recoil";
import store from "./util/state/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RecoilRoot>
          <RouterProvider router={routes} />
        </RecoilRoot>
      </Provider>
    </div>
  );
};

export default App;
