import React from 'react';
import Button from './Button';
import Message from './Message';
import './App.css';

const messagesData = [
  { id: 1, text: 'Oi...', sender: 'outro', status: 'lido' },
  { id: 2, text: 'Tu não me ama mais?', sender: 'outro', status:'lido'  },
  { id: 3, text: 'Oi, boa tarde.', sender: 'eu', status:'nlido'},
  { id: 4, text: 'Quem é você mesmo?', sender: 'eu', status: 'nlido' },
];

const App = () => {
  return (
    <div className="chat">
      <div className="header">
        <Button />
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {messagesData.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
