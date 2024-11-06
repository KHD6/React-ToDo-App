import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
html{font-size: 10px;}
body{text-align: left;font-size:1.6rem;color:${(props) =>
  props.theme.textColor};background-color: ${(props) =>
  props.theme
    .bgColor};line-height:1.4;font-weight:400; font-family: "Noto Sans", sans-serif;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,span,form,fieldset,p,button,address,table, tbody, tfoot, thead, th, tr, td, video {margin:0;padding:0;box-sizing: border-box;}
header,article,aside,canvas,details,figcaption,figure,footer,hgroup,menu,nav,section,summary,mark {display:block;margin: 0; padding: 0;box-sizing: border-box;}
h1,h2,h3,h4,h5,h6{box-sizing: border-box;}
input,button,textarea,select,table{box-sizing: border-box;}
input,button,textarea,select{box-sizing: border-box;}
select{min-height: 3.5rem;}
img,fieldset,iframe{border:0;}
li{list-style:none}
img,input,select,button,textarea{vertical-align:top; box-sizing: border-box;}
input[type=radio]{border-radius:0px 0px; -webkit-border-radius: 50%;}
input[type=radio]:checked{background-color: ${(props) => props.theme.bgColor};}
img{max-width:100%}
em,address,optgroup{font-style:normal}
label,button{cursor:pointer}
label{position: relative; white-space: nowrap;}
button{margin:0; padding:0;}
a,::after,::before{box-sizing: border-box; text-decoration: none !important;}
a{text-decoration: none; color: inherit;}
legend,caption{font-size:0; width:0; height:0; line-height:0;overflow:hidden;text-indent:-9999px}
p{word-wrap: break-word;}
dt,dd,li{word-wrap: break-word;}
table {width:100%; font-weight:400; border-spacing:0; border-collapse: collapse;border: 0;}
input,button,label,select,a{-webkit-tap-highlight-color : transparent;}
textarea{resize: none;}
input:focus, select:focus, option:focus, textarea:focus, button:focus{outline: none;}

/* hidden input[type="number"] */
input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {-webkit-appearance: none; margin: 0;}
label{cursor: default;}
input[type=date]::-webkit-calendar-picker-indicator{cursor: pointer;}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
