import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import Onboarding from './components/onboarding';
import Homepage from './homePage';
import AppRouter from './routes';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Onboarding/> */}
      {/* <Homepage/> */}
      <AppRouter/>
    </div>
  );
}

export default App;
