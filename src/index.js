import ReactDOM from "react-dom";
import React, { useContext, useState } from "react";

// Create#ing a ThemeContext object
// It contains a Consumer property (Component)
// It contains a Provide property (Component)
const ThemeContext = React.createContext();
// console.log(ThemeContext);

const NumberContext = React.createContext();

// Look, no properties are coming in!!
function Display() {
  // The useContext hook allows us to use the context without defining a Consumer
  // Notice that now we can NOT edit the value of 'theme', we just get one string
  // Commonly you will receive a more complex object, like we did yesterday
  const contextValue = useContext(ThemeContext);
  const number = useContext(NumberContext);
  return (
    <div onClick={() => contextValue.setTheme("light")}>
      Theme value: {contextValue.theme}, Number: {number}
    </div>
  );

  //   const { theme } = props; // Object destructuring
  //   return (
  //     <ThemeContext.Consumer>
  //       {(theme) => <div>Theme is {theme} </div>}
  //     </ThemeContext.Consumer>
  //   );
}

function App() {
  const [theme, setTheme] = useState("dark"); // array destructuring
  const contextValue = { theme, setTheme };
  //   const theme = "light";
  // ThemeContext.Provider --- this makes our context available to all descendants
  return (
    <NumberContext.Provider value={1234}>
      <ThemeContext.Provider value={contextValue}>
        <div className="App">
          <Display />
          <Display />
        </div>
      </ThemeContext.Provider>
    </NumberContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
