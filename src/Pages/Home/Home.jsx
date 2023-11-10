import React from "react";
import { Card } from "../../components/Card/Card";
import "./Home.css";



export function Home() {

  return(
    <>
    <h1 className="home-h1">Todo Lists</h1>
    <div className="cards">
      <Card />
    </div>
    </>
  )
}