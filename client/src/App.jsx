import styles from './App.module.css';
import Navigation from './components/Navigation';
import Create from './scenes/Create';


const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Create />
      This is where we start
    </div>
  );
}

export default App;