import { useEffect, useState } from "react";
import RegistrationForm from "./layout/Registration";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import { itemSet } from "./reduxStore/reducer";

function App() {

  const data = useSelector((state) => state.counter.noOfItemInCart)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(itemSet(value))
  };


  return (
    <>
      <h1>React Test Case</h1>
      <input
        type="text"
        id="name"
        name="name"
        value={data}
        onChange={handleChange}
        data-testid="name_lts"
        required
      />

      <div>{data}</div>
      <div><Profile newData={data} /></div>
      <RegistrationForm />
    </>
  )
}

export default App