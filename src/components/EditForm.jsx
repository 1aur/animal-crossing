import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

export default function EditForm() {
  const { id } = useParams()
  const [villager, setVillager] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchVillager() {
      const { data } = await supabase.from("villagers").select("*").eq("id", id).single()
      setVillager(data)
    }
    fetchVillager()
  }, [id])

  async function handleUpdate(e) {
    e.preventDefault()
    await supabase.from("villagers").update(villager).eq("id", id)
    navigate("/")
  }

  async function handleDelete() {
    await supabase.from("villagers").delete().eq("id", id)
    navigate("/")
  }

  if (!villager) return <p>Loading...</p>

  return (
    <form onSubmit={handleUpdate}>
      <input value={villager.name} onChange={e => setVillager({ ...villager, name: e.target.value })} />
      <select value={villager.role} onChange={e => setVillager({ ...villager, role: e.target.value })}>
        <option>Fisher</option><option>Farmer</option><option>Gardener</option>
      </select>
      <select value={villager.species} onChange={e => setVillager({ ...villager, species: e.target.value })}>
        <option>Octopus</option><option>Robot</option><option>Flamingo</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </form>
  )
}