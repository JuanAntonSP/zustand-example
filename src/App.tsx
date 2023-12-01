import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Home } from "./pages/home";

const App = () => {
  return (
    <Theme>
      <Home />
    </Theme>
  );
};

export default App;
