import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
// import { update, remove } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { update,remove } from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(update({ name, email }));
  };
  const removeItem = (e) => {
    e.preventDefault();
    dispatch(remove());
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={removeItem}>Delete Account</button>
        <div className="updateContainer">
          <form>  
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <button
              className="updateButton"
              onClick={handleClick}
            >
              Update
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
