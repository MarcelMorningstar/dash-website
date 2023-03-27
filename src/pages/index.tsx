import Header from '../components/Header';
import Downloads from '../components/Downloads';
import Window from '@/components/Window';
import Services from '@/components/Services';
import React, { useState } from 'react';

export default function Home() {
  const [windowContent, setWindowContent] = useState({'show':false, 'content':(<h1>content</h1>)});

  const changeWindowContent = (params : any) => {
    setWindowContent(params);
  }

  return (
    <div>
      {windowContent.show !== false &&
        (
          <Window changeContent={changeWindowContent}>
            {windowContent.content}
          </Window>
        )
      }
      <Header onAccept={changeWindowContent} />
      <Downloads />
      <Services />
    </div>
  )
}
