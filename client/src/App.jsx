import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navigation from './components/Navigation';
import Create from './scenes/Create';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/create" element={<Create />}/>
      </Routes>
      This is where we start
    </div>
  );
}

export default App;