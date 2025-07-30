import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

export default function DetailPage() {
  const { id } = useParams()
  const [villager, setVillager] = useState(null)

  useEffect(() => {
    async function fetchVillager() {
      const { data } = await supabase.from("villagers").select("*").eq("id", id).single()
      setVillager(data)
    }
    fetchVillager()
  }, [id])

  if (!villager) return <p>Loading...</p>

  return (
    <div className="container">
      <h2>{villager.name}</h2>

      <div className="villager-detail-card">
        <p><strong>Role:</strong> {villager.role}</p>
        <p><strong>Species:</strong> {villager.species}</p>

        <p className="detail-note">
          This villager is a beloved part of your town. 🍃 Customize their traits by editing below!
        </p>

        <Link to={`/edit/${villager.id}`} className="edit-button">
          Edit This Villager
        </Link>
        <img
        src={`/images/${villager.species.toLowerCase()}.webp`}
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = `/images/${villager.species.toLowerCase()}.png`;
        }}
        alt={villager.species}
        className="villager-detail-img"
        />
      </div>
    </div>
  )
}