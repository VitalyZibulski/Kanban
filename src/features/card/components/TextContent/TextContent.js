import React from 'react';
import { useSelector } from "react-redux";
import { getText } from "../../selectors";
import { Div } from "@vkontakte/vkui";
import marked from 'marked';

import './style.css';

const TextContent = () => {
  const text = useSelector(getText)

  if (!text) {
    return null;
  }

  const content = text.replace(/\\n/g, '\n');

  return (
    <Div className="TextContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  )
};

export default TextContent;
