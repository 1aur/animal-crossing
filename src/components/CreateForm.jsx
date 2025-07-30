import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate } from "react-router-dom"

export default function CreateForm() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [species, setSpecies] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
  
    const { error, data } = await supabase.from("villagers").insert([
        { name, role, species }
      ])
      
      if (error) {
        console.error("Supabase insert error:", error) 
        alert("There was an error creating the villager.\n\n" + error.message)
      } else {
        console.log("Inserted:", data)
        navigate("/")
      }
  }

  return (
    <div className="container">
      <h2>Create a New Villager</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>Villager</option>
          <option>Mayor</option>
          <option>Shopkeeper</option>
        </select>
        <label>Species</label>
        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option>Alligator</option>
          <option>Bear</option>
          <option>Bird</option>
          <option>Deer</option>
          <option>Cow</option>
          <option>Frog</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Horse</option>
        </select>
        <button type="submit">Add Villager</button>
      </form>
    </div>
  )
}