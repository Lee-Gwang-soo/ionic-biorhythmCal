import dayjs from 'dayjs';

function calculateBiorhythm(birthDate, targetDate,cycle) {
    const birthDay = dayjs(birthDate).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff = targetDay.diff(birthDay, 'days')
    return Math.sin(2 * Math.PI * diff / cycle)
}

export function calculateBiorhythms(birthDate, targetDate) {
    return {
        physical : calculateBiorhythm(birthDate, targetDate, 23), // 바이오리듬계산으로 cycle값이 physical은 23, emotional은 28, intellectual은 33이다. 
        emotional : calculateBiorhythm(birthDate, targetDate, 28),
        intellectual : calculateBiorhythm(birthDate, targetDate, 33)
    }
    // const birthDay = dayjs(birthDate).startOf('day')
    // const targetDay = dayjs(targetDate).startOf('day')
    // const diff = targetDay.diff(birthDay, 'days')
    // return Math.sin(2 * Math.PI * diff / 23)
}