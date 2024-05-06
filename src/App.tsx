import './App.css';
import { Outlet } from 'react-router-dom';
import BackGround from './components/BackGround';
import Container from './components/Container';
import 'react-material-symbols/outlined';

function App() {
  return (
    <BackGround>
      <Container>
        <Outlet />
      </Container>
    </BackGround>
  );
}

export default App;
