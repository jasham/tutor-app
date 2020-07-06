import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const QustionDetail = () => {
  const [qustions, setQustions] = useState({
    title: "",
    Qustions: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setQustions(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/QutionsList">
        Back To Qustion list
      </Link>
      {/* <h1 className="display-4">User Id: {id}</h1> */}
      <hr />
      <ul className="list-group w-100">
        <li className="list-group-item"> {qustions.title}</li>
        <li className="list-group-item"> {qustions.Qustions}</li>
      </ul>
    </div>
  );
};

export default QustionDetail;
