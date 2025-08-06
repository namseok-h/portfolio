import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/Project1';
import KakaoMap from './components/KakaoMap';
import Resume from './components/Resume';
import Mypage from './components/Mypage';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='project1' element={<Project1/>} />
            <Route path='kakaomap' element={<KakaoMap/>}/>
            <Route path='resume' element={<Resume/>}/>
            <Route path='mypage' element={<Mypage/>}/>
          </Routes>
        </main>
      </header>
    </div>
  );
}

export default App;
