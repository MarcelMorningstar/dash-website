import Header from '../components/Header';
import Downloads from '../components/Downloads';
import Window from '@/components/Window';
import React, { useState } from 'react';

export default function Home() {
  const [windowContent, setWindowContent] = useState({'show':false, 'content':(<h1>content</h1>)});

  const changeWindowContent = (params : any) => {
    setWindowContent(params);
  }

  console.log(windowContent.content);

  return (
    <div>
      <Header onAccept={changeWindowContent} />
      {windowContent.show !== false &&
        (
          <Window changeContent={changeWindowContent}>
            {windowContent.content}
          </Window>
        )
      }
      <Downloads />
    </div>
  )
}
