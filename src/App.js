import Router from "./Router";
import { useState} from "react";
import ThemeContext,{UseTheme} from "./Context/themeContext";
// import useCount from "./Hooks/useCount";

const App = () => {
  const [theme,setTheme]=useState(UseTheme.theme1);
  const value= {theme}

  // const data=useCount();
  const aboutdata = {
    image: "./image/img.png",
    author: "f_karayannopoulops@firm.com",
    right_h1: "Fotis Karayannopoulos",
    right_h2: "SENIOR ASSOCIATE",
    right_h3: "SUPREME COURT LAWYER",
    right_h4: "Admitted ti Bar in 1992",
    right_h5: "Languages:",
    right_h6: "GREEK,ENGLISH,FRENCH",
    right_h7: "DOWNLOAD V.CARD"
  }
  return (
  <div>
      <ThemeContext.Provider value={value} >
    <Router text={aboutdata} />
   </ThemeContext.Provider>
   {/* <h2>Count up: {data.count}</h2>
   <button onClick={data.handleIncrement}>Increment</button> */}
    </div>


   );
}

export default App;

