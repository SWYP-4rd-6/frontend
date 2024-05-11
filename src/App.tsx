import './App.css';
import { Outlet } from 'react-router-dom';
import BackGround from './components/Common/BackGround';
import Container from './components/Common/Container';

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
