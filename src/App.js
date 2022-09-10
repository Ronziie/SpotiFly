import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Dashboard from './Dashboard';




const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Dashboard code = {code}></Dashboard> : <Login />
    
}

export default App
