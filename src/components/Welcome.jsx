import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

// Funzione che mostra il messaggio di benvenuto nella pagina
function Welcome() {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className={theme === "light" ? "mt-3 mx-3" : "bg-dark mb-0 "}
        show={show}
        variant="primary"
        onClose={() => setShow(false)}
        data-bs-theme={theme}
        dismissible
        style={theme === "dark" ? { borderRadius: '0' } : {}}
      >
        {" "}
        {/* Messaggio di benvenuto */}
        <Alert.Heading
          className={
            theme === "light" ? "text-center" : "text-center text-light bg-dark"
          }
        >
          Welcome to EPIBOOKS Bookstore!
        </Alert.Heading>{" "}
        {/* Testo del messaggio */}
      </Alert>
    );
  }
}
export default Welcome;
