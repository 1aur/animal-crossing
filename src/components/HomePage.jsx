import React from "react"
import "./HomePage.css"
import logo from "../images/Animal_Crossing_Logo.png"
import digby from "../images/digby.png"
import isabelle from "../images/isabelle.png"
import tomNook from "../images/tom-nook.png"

export default function HomePage() {
  return (
    <div className="home-container">
      <img src={logo} alt="Animal Crossing Logo" className="home-logo" />

      <p className="welcome-text">
        Welcome to <strong>Animal Crossing Villager Mania!</strong><br />
        Here is where you can create and customize your own villagers!
      </p>

      <div className="character-row">
        <img src={digby} alt="Digby" className="character" />
        <img src={isabelle} alt="Isabelle" className="character" />
        <img src={tomNook} alt="Tom Nook" className="character" />
      </div>
    </div>
  )
}