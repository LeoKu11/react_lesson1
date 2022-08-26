import {Message} from "./components/Message/Message";
import {useState} from "react";

export const App = () => {
    const [text, setText] = useState('Here will be the text with input')
    const handleChangeText = (el) => {
        setText(el.target.value)
    }
  return (
    <div className="App">
        <input onChange={handleChangeText}/>
        <Message text={text}/>
    </div>
  );
}