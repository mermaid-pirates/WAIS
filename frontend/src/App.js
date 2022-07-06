import './App.css';
import { useState } from "react";
import Navbar from './nav';
import RenderPage from './RenderPage';

function App(props) {
  const request_url = 'https://127.0.0.1:4000';
  const page_url = "https://www.oidc.co.kr/home";
  const [styleSheet, setStyle] = useState({});


  const event_controller = (e, func)=>{
    if(func === "show_origi n_page"){
      console.log("show_origin_page");
      fetch(request_url)
        .then((res)=>{
          
        })
    } else if(func === "restrict_blick"){

    } else if(func === "contrast_color_up"){

    } else if(func === "contrast_color_down"){

    } else if(func === "contrast_brightness_up"){

    } else if(func === "contrast_brightness_down"){

    } else if(func === "font_sizing_up"){

    } else if(func === "font_sizing_down"){

    }
  }

  const nav = <Navbar e={event_controller}/>
  const render_page = <RenderPage src={page_url} sheet={styleSheet}/>

  return (
    <div className="App">
      {nav}
      {render_page}

      <script>
        window.addEventListenr('load')
      </script>
    </div>
  );
}

export default App;
