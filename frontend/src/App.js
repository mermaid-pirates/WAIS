import './App.css';
import { useState } from "react";
import RenderPage from './RenderPage';
import ToolBar from './toolBar';
import request_style from './api/requestStyle';

const request_url = 'http://127.0.0.1:4000/';
const api = {
  dark: ['color', 'dark'],
  color_weakness: ['color', 'color_weakness'],
  origin: ['color', 'original'],
  high_contrast: ['color', 'high_contrast'],
  text_sizing: ['text', 'text_size']
};

function App() {
  const [renderHTML, setHTML] = useState("");
  const requestAPI = async (api_event)=>{ 
    const res = request_style(request_url, renderHTML, api_event);
    res.then((res)=>{
      return res.text();
    })
      .then((html)=>{
        setHTML(html)
      })
  }

  const render_page = <RenderPage server={request_url} render={setHTML} body={renderHTML}/>
  const tool_maneger = <ToolBar e={requestAPI} api={api}/>;

  return (
    <div className="App-madebymermaid">
      <header className='header'>
          <a className='logo' href="/">
          <h1 className='title'>인어공주해적단</h1>
          <img className='logo_img' src='./mermaid_pirate.png' alt="group_logo"></img>
          </a>
          <form className='service_form' action="/searching">
            <input type="url" name="search" placeholder="Enter Url"></input>
            <input type="submit" value="Go!"></input>
        </form>
      </header>
      <aside id="tool-box">
          <h2 className='service_name'>웹 접근성 향상 서비스</h2>
          <p className='service_destination'> (WAIS) 모두가 모든 웹페이지를<br></br>사용할 수 있기를</p>
          {tool_maneger}
      </aside>
      <div className='contents'>
        {render_page}
      </div>
    </div>
  );
}

export default App;
