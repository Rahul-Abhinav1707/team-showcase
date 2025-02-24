import './App.css'
import TeamMemberCard from './Components/TeamMemberCard'


const data = [{ name: "Akshit", title: "Software Engineer"}, {name: "Puru", title: "Hardware Engineer"}]

function App() {

  return (
    <>
    <TeamMemberCard data = {data}/>
    </>
  )
}

export default App