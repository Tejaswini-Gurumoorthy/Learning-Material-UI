import React from "react"
import { Typography } from "@material-ui/core"
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
        
    </>
  )
}

export default App
