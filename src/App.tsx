import './App.css'
import { Button } from './components/button';
import { Header } from './components/header'
import { UserCard } from './components/userCard'

function App() {
  const title: string = 'Welcome to Day2'
  const user = { id: 1, name: "Pavan", role: "Frontend Engineer" }; 

  return (
    <>
      <Header title= {title}></Header>
      <UserCard user= {user}></UserCard>
      <Button label='Click Me' onClick={() => { alert('Heyy')}}></Button>
    </>
  )
}

export default App
