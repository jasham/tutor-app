import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Qution.css";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import QustionDetail from "../DetailsQustion/Index";
const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
`;

// const
const QutionsList = () => {
  const [qustions, setQuests] = useState([]);

  useEffect(() => {
    console.log("hello world");
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setQuests(result.data);
  };

  return (
    <Div
      style={{
        width: "100%",
        height: "100%",
        marginTop: "5%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "150px",
          justifyContent: "space-between",
        }}
      >
        <Button className="btn btn-primary py-1.5" style={{ width: "90%" }}>
          Total 20
        </Button>
        <Button className="btn btn-warning" style={{ width: "90%" }}>
          Panding 10
        </Button>
        <Button className="btn btn-success" style={{ width: "90%" }}>
          Answering 5
        </Button>
      </div>
      <div
        class="container"
        style={{
          height: "630px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          className="example-1 scrollbar-ripe-malinka"
          style={{ height: "100%", border: "0px", padding: "3px" }}
        >
          {qustions.map((qustions, index) => (
            <div
              class="card border-secondary mb-3 shadow"
              style={{ width: "100%" }}
            >
              <div class="card-body">
                <Link to={`/QustionDetail/${qustions.id}`}>
                  <div style={{ fontSize: "25px", fontWeight: "500" }}>
                    {qustions.title}
                  </div>
                </Link>
                <p class="card-text">{qustions.Qustions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "200px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "200px",
          // paddingTop: "8px",
        }}
      >
        <Link
          to="/AddQustion"
          className="btn btn-info"
          style={{ width: "90%" }}
        >
          Ask Qustion
        </Link>
      </div>
    </Div>
  );
};

export default QutionsList;
