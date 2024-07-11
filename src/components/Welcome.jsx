import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';


// Funzione che mostra il messaggio di benvenuto nella pagina
function Welcome(){
    const [show, setShow] = useState(true);
    if (show) {
    return(
        <Alert className='mt-3 mx-3' variant="primary" onClose={() => setShow(false)} dismissible> {/* Messaggio di benvenuto */}
        <Alert.Heading className='text-center'>Welcome to EPIBOOKS Bookstore!</Alert.Heading> {/* Testo del messaggio */}
      </Alert>
    )
} 

}
export default Welcome;