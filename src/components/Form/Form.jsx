import style from './Form.css';
import { useState, useEffect } from 'react';

export const Form = ({ arr, hendelChangeMessageList }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [quantity, setQuantity] = useState(null);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setIsTyping(false);

      hendelChangeMessageList([
        ...arr,
        {
          text: text,
          author: author,
        },
      ]);
    } else {
      alert('Empty field !!!');
    }
  };

  const authorChange = (event) => {
    setIsTyping(true);
    setAuthor(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };


  useEffect(() => {
    setTimeout(() => {
      console.log('The article has been published. Author:  ' + author);
    }, 1500);
  }, [author, isTyping]);

  return (
    <div className={style.card}>
      <span className={style.title}>author:</span>&nbsp;&nbsp;
      <input
        className={style.field}
        type="text"
        onChange={authorChange}
      ></input>&nbsp;&nbsp;
      <span className={style.title}>text:</span>&nbsp;&nbsp;
      <input
        className={style.field}
        type="text"
        onChange={textChange}
      ></input>&nbsp;&nbsp;
      <button className={style.btn} onClick={handleClick}>&nbsp;&nbsp;
        Send
      </button>
      <div className={style.info}>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};
