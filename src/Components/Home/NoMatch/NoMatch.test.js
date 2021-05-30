import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import App from "../../../App";

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/login2");
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});
