import { Message } from "./components/Message/Message";
import { Form } from './components/Form/Form';
import { useState } from "react";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  return (<div className="App">
    <Form arr={messageList} hendelChangeMessageList={setMessageList} />
    <Message data={messageList.length} />
    <div>
      <p>
        <u>messageList:</u>
      </p>
      {messageList.map((message, index) => (
        <div key={index}>
          {' '}
          {message.author}: {message.text}
        </div>
      ))}
    </div>
  </div>
  );
} 