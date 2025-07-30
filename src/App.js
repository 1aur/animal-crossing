import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import CreateForm from "./components/CreateForm"
import EditForm from "./components/EditForm"
import SummaryPage from "./components/SummaryPage"
import DetailPage from "./components/DetailPage"
import HomePage from "./components/HomePage"
import './styles/theme.css'

export default function App() {
  return (
    <Router>
      <div className="layout-container">
        <aside className="sidebar">
          <h1>🌳 Villager App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create a Villager</Link>
            <Link to="/gallery">Villager Gallery</Link>
          </nav>
          <img src="/leaf.svg" alt="leaf icon" className="leaf-icon" />
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/gallery" element={<SummaryPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateForm />} />
            <Route path="/edit/:id" element={<EditForm />} />
            <Route path="/villager/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}