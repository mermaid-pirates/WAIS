import './Home.css';

function Home() {
  return (
    <div className="main_page">
      <header className='header'>
        <a className='logo' href="/">
          <h1 className='title'>WAIS</h1>
          <img className='logo_img' src='./mermaid_pirate.png' alt="와이즈 홈페이지"></img>
        </a>
        <ul className="nav">
          <li><a href="#">Project</a></li>
          <li><a href="#">Document</a></li>
          <li><a href="https://github.com/mermaid-pirates/WAIS">GitHub</a></li>
        </ul>

      </header>
      <section className='contents'>
        <div className='introduce'>
          <h2>Web Accessibility Improvement Service</h2>
          <p>
          우리 프로젝트의 목표는 웹 접근성을 개선하여 <br />모든 사람들이 쉽고 편하게 웹 서비스를 이용하는 것입니다.
          </p>

          <form className='service_form' action="/searching">
          <input type="url" name="search" placeholder="접속 링크를 입력해주세요..."></input>
          <input type="submit" value="접속"></input>
        </form>
        </div>
        
      </section>
      <footer className='footer'>
        <p className='copyright'>
        ⓒ2022, 인어공주 해적단, All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
