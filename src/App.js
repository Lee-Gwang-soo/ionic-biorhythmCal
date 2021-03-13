import {
	IonApp,
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonLabel,
	IonItem,
	IonInput,
	IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './component/BiorhythmCard';

function App() {
	const [ name, setName ] = useState('');
	const [ birthDate, setBirthDate ] = useState('');
	const [ targetDate, setTargetDate ] = useState(new Date().toISOString());

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>BioRhythms</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				{/* claaName에 "ion-padding"이라는 Name을 지정해주면 Ionic에 지정된 css가 적용된다. */}
				{birthDate && <BiorhythmCard name={name} birthDate={birthDate} targetDate={targetDate} />}
				<IonItem>
					<IonLabel position="stacked">Name : </IonLabel>
					{/* IonLabel에는 position이라는 속성값이 있다. fixed(모든 라벨의 영역을 같은값으로 고정), floating(일반적인 label에 애니메이션동작 추가), stacked(처음부터 애니메이션동작) */}
					<IonInput
						type="text"
						placeholder="Your Name"
						value={name}
						onIonChange={(event) => setName(event.detail.value)}
					/>
					{/* IonInput에서는 React와 달리 onChange가 아닌 onIonChange함수를 써야하고, event.target 대신에 event.detail을 써야한다 */}
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Birth : </IonLabel>
					<IonDatetime
						displayFormat="YYYY-MM-DD(DDDD)"
						value={birthDate}
						onIonChange={(event) => setBirthDate(event.detail.value)}
					/>
					{/* IonDateTime은 날짜를 선택하게 해주는 라이브러리, displayFormat으로 입력값을 custom할 수 있다. */}
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Target : </IonLabel>
					<IonDatetime
						displayFormat="YYYY-MM-DD(DDDD)"
						value={targetDate}
						onIonChange={(event) => setTargetDate(event.detail.value)}
					/>
				</IonItem>
			</IonContent>
		</IonApp>
	);
}

export default App;
