import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import { Link } from "react-router-dom"

export default function SummaryPage() {
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    async function fetchVillagers() {
        const { data } = await supabase
        .from("villagers")
        .select("*")
        .order("created_at", { ascending: false })
      setVillagers(data)
    }
    fetchVillagers()
  }, [])

  return (
    <div>
      <h2>Your Villager Gallery!</h2>
      <Link to="/create" className="ac-link">+ Create New</Link>
      <div className="villager-gallery">
        {villagers.length > 0 ? villagers.map(c => (
          <div key={c.id} className="villager-card">
          <img
            src={`/images/${c.species.toLowerCase()}.webp`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `/images/${c.species.toLowerCase()}.png`;
            }}
            alt={c.species}
            className="villager-card-img"
          />
          <h3>{c.name}</h3>
          <p>Role: {c.role}</p>
          <p>Species: {c.species}</p>
          <div className="villager-card-links">
            <Link to={`/villager/${c.id}`} className="ac-link">Details</Link>
            <span style={{ margin: '0 6px' }}>|</span>
            <Link to={`/edit/${c.id}`} className="ac-link">Edit</Link>
          </div>
        </div>
        )) : <p>You haven't made a villager yet! 🍃</p>}
      </div>
    </div>
  )
}