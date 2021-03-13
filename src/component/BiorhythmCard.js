import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';
import { calculateBiorhythms } from '../calculations.js';

function formatDate(isoString) {
	// 날짜값을 format으로 형식을 바꿔서 계산해야함.
	return dayjs(isoString).format('YYYY MM DD');
}

function BiorhythmCard({ birthDate, targetDate, name }) {
	const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
	return (
		<IonCard className="ion-text-center">
			<IonCardHeader>
				<IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<p>{name} 님의 Biorhythm Data를 알려드리겠습니다.</p>
				<br />
				{/* toFixed(number)는 소수점 number자리까지의 수를 반환시켜준다. */}
				<p>Physical : {physical.toFixed(4)}</p>
				<p>Emotional : {emotional.toFixed(4)}</p>
				<p>Intellctual : {intellectual.toFixed(4)}</p>
			</IonCardContent>
		</IonCard>
	);
}

export default BiorhythmCard;
