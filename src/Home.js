import './Home.css';

function Home() {
  const hidden = {
    display: "none"
  }

  return (
    <div className="main_page">
      <div className='back-color'></div>
      <div className='setting'>
        <img className='setting_logo' src='./setting_i.png' alt="setting 버튼"></img>
        <p className='setting_title'>환경설정</p>
      </div>
      <header className='header'>
        <a className='logo' href="/">
          <h1 className='title'>인어공주해적단</h1>
          <img className='logo_img' src='./mermaid_pirate.png' alt="group_logo"></img>
        </a>
      </header>
      <section className='contents'>
        <h2 className='service_description' style={hidden}>
          url_form for service
        </h2>
        <p className='service_desc'>
          <span className='desc_what'>웹 접근성 향상 서비스</span>
          <span className='desc_for'> (WAIS) 모두가 모든 웹페이지를 사용할 수 있기를</span>
        </p>
        <form className='service_form' action="/searching">
          <input type="url" name="search" placeholder="Enter Url"></input>
          <input type="submit" value="Go!"></input>
        </form>
      </section>
      <footer className='footer'>
        <p className='copyright'>
          @2022, 인어공주 해적단, All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
