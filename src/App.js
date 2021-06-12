import { CssModules } from "./compornents/CssModules";
import { InlineStyle } from "./compornents/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
