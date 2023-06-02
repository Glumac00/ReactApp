import React, { useState } from "react";
import Button from "react-bootstrap/Button";
interface ChatBoxProps {}
const Chat: React.FC<ChatBoxProps> = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };
  const handleSendClick = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };
  return (
    <div className="chat__body">
      <div className="chat__UI">
        {messages.map((message, index) => (
          <p className="chat__UI__message" key={index}>
            {message}
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <div>
          <input
            className="chat__textbox"
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button
            variant="dark"
            className="chat__button"
            onClick={handleSendClick}
          >
            Dark
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Chat;
