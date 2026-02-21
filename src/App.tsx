import winxLogo from './assets/images/Logo.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={winxLogo} className="logo" alt="Winx logo" />
      </div>
      <h1>Welcome to Winx</h1>
      <p className="read-the-docs">
        Built with React + Vite
      </p>
    </>
  )
}

export default App
