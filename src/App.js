import Home from './pages/Home';
import { BACKGROUND_COLOR } from './constants/colors';
import Header from './components/Shared/Header';
function App() {
  return (
    <div style={{backgroundColor: `${BACKGROUND_COLOR}`, minHeight: "100vh"}}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
