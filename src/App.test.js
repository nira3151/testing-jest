import { Provider } from "react-redux";
import App from "./App";
import store from "./reduxStore/store";
import { act, fireEvent, render } from "@testing-library/react";
import { itemSet } from "./reduxStore/reducer";
import { configureStore } from "@reduxjs/toolkit";

it('shows the name', async () => {
  let data = "123"
  // store.dispatch(
  //   itemSet(data)
  // );
  const { findByText, getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  act(() => {
    fireEvent.change(getByTestId('name'), { target: { value: data } });
  });
  expect(await findByText(data)).toBeInTheDocument();
});

const mockChildComponent = jest.fn();
jest.mock("./profile", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test("If ParentComponent is passed open and has data, ChildComponent is called with prop open and data", async () => {
  const data = "ghghghg"
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  act(() => {
    fireEvent.change(getByTestId('name_lts'), { target: { value: data } });
  });

  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      newData: data,
    })
  )
})

