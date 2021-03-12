import { IonButton, IonToast } from '@ionic/react'
import React, {useState} from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);
  // IonToast 기능중에 open값으로 true와 false를 줄 수 있다.  
  const handleClick= () => {
    setShowToast(true)
    setTimeout(()=> setShowToast(false), 1500);
  }
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>Click Me</IonButton>
        <IonToast isOpen={false} message="Hello world!" />
      </main>
    </div>
  );
}

export default App;
