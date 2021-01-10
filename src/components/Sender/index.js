import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Sender = ({ onAddMessage }) => {
  const [value, setValue] = useState("");

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessage({
      id: Date.now(),
      avatar:
        "https://avatars3.githubusercontent.com/u/67437278?s=460&u=f7893aeaf9f320d22b8d6c0beb3f9e0a6c2374ce&v=4",
      message: value,
      date: new Date().toISOString(),
      is: "my",
      status: "sended",
    });
    setValue("");
  };

  return (
    <form className="sender" onSubmit={onSubmit}>
      <input
        placeholder="Введите сообщение"
        value={value}
        onChange={onChange}
        required
      />
      <button>Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;