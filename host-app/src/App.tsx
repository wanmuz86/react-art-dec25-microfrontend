
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();
  // Open the details page in micro app
  const navigateToMicroApp = () => navigate('/app/details');

  return (
    <div className='App'>
     <h1>Host Application</h1>
     
     <button onClick={navigateToMicroApp}>Go to Micro app details</button>
    </div>
  )
}

export default App
