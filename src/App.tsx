import './App.css'
import { Welcome } from './components/welcome'

function App() {
  const text = 'DAY1';
  const name = 'Pavan';
  const name2 = 'PavanKumar';

  return (
    <>
    <p> Hello Welcome to {text}</p>    
    <Welcome name={name}/>
    <Welcome name={name2}/>
    </>
  )
}

export default App
