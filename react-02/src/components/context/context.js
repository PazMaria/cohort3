import React, { Component, createContext } from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    green: { text: "white", bgBut: "#112d32", bgDiv: "#88bdbc" },
    white: { text: "white", bgBut: "#88bdbc", bgDiv: "white" }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
