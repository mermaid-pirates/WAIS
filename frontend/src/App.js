import './App.css';
import { useState } from "react";
import RenderPage from './RenderPage';
import ToolBar from './toolBar';

function App(props) {
  const request_url = 'http://127.0.0.1:4000/';
  const [styleSheet, setStyle] = useState({
    'background-color': 'green',
    'color': 'red',
  });


  const event_controller = (e)=>{
    if(true){
      
      // fetch(request_url)
      //   .then((res)=>{
          
      //   })
    } 
  }

  const render_page = <RenderPage requestStyle={styleSheet} server={request_url}/>
  const tool_maneger = <ToolBar e={event_controller} />;

  return (
    <div className="App">
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
      <aside>
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
