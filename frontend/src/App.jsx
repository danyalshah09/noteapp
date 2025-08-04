import React from 'react'
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import HomePage from "./pages/HomePage"
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/create" element={<CreatePage/>}/>
<Route path="/note/:id" element={<NoteDetailPage/>}/>
</Routes>
)
}
export default App