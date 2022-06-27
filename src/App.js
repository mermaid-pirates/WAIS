import Navbar from "./nav/nav";
import './css/App.css';

function App() {
  const nav = <Navbar />

  return (
    <div className="App">
      {nav}
      <iframe
        src="https://naver.com"
        name="프레임 이름"
        width="100%"
        height="575px"
        sandbox="allow-scripts allow-popups">
        iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공  
      </iframe>
    </div>
  );
}

export default App;
