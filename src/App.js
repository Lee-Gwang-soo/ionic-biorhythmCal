import { 
  IonApp,
  IonButton, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonTitle, 
  IonToast, 
  IonToolbar
} from '@ionic/react'
import React, {useState} from 'react';
import { play as playIcon } from 'ionicons/icons'

function App() {
  const [showToast, setShowToast] = useState(false);
  // IonToast 기능중에 open값으로 true와 false를 줄 수 있다.  
  const handleClick= () => {
    setShowToast(true)
    setTimeout(()=> setShowToast(false), 1500);
  }
  return (
    <IonApp> 
      <IonHeader>
        <IonToolbar>  
        <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Ionbutton은 color 속성있음 (primary, secondary, warning 등등)
        color 속성값들 : https://ionicframework.com/docs/theming/basics
        IonIcon에는 slot 속성이 있음. (start , end, icon-only) */}
        <IonButton color="primary" onClick={handleClick}>
        <IonIcon icon={playIcon} slot="start"/>
          Click Me
        </IonButton>
        <IonButton color="danger" onClick={handleClick}>
        <IonIcon icon={playIcon} slot="end"/>
          Click Me
        </IonButton>
        <IonButton color="warning" onClick={handleClick}>
        <IonIcon icon={playIcon} slot="icon-only"/>
        </IonButton>
        <IonToast isOpen={showToast} message="Hello world!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
