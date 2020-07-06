import React, { useState } from "react";
import { form, button, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddQustion = () => {
  let history = useHistory();
  const [qustions, setQustions] = useState({
    title: "",
    Qustions: "",
  });
  const { title, Qustions } = qustions;
  const onInputChange = (e) => {
    setQustions({ ...qustions, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", qustions);
    history.push("/QutionsList");
  };
  // const onInputChaing = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        className="card border-secondary mb-3 shadow"
        style={{ width: "100%" }}
      >
        <div class="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Qustain Name"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <FormControl
                as="textarea"
                aria-label="With textarea"
                className="form-control form-control-lg"
                placeholder="Enter Your Qustion"
                name="Qustions"
                value={Qustions}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">
              Submit Qustion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddQustion;
