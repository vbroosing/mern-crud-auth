// import React from 'react'
import loginPage from './pages/loginPage'
import registerPage from './pages/registerPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={loginPage()} />
        <Route path='/register' element={registerPage()} />
        <Route path='/tasks' element={<h1>tasks</h1>} />
        <Route path='/add-task' element={<h1>add-task</h1>} />
        <Route path='/task/:id' element={<h1>task details</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />

      </Routes>
    </BrowserRouter>

    
    
  )
}

export default App