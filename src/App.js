import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [backendMessage, setBackendMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/health')
    .then((response) => {
      console.log(response);
      setBackendMessage(response.data);
    })
    .catch((error) => {
      setBackendMessage('Error getting response.');
    });
  },[]);

  return (
    <div className='App'>
      <h1>
        {backendMessage?backendMessage:"Loading..."}
      </h1>
    </div>
  );
}

export default App;