import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(1000)
  const dataUser = [
    {
      id: 1,
      name: "pepe",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 2,
      name: "jose",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 3,
      name: "juan",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "lucas",
      photo: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 5,
      name: "jesus",
      photo: "https://randomuser.me/api/portraits/me",
    }  ]
  return (
    <>
     <Users dataUser={dataUser}></Users>
    </>
  )

  }
export default App
