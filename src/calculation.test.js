import { calculateBiorhythms } from './calculations';
/* 
  test코드 작성
  it( test에 관한 설명)
  const 변수 = test진행할 메소드
  expect(테스트 실행값).toEqual(테스트 진행히 나와야 하는값)
  expect와 toEqual의 값이 일치하면 test pass, 불일치할시 fail
*/
it('calculates the Physical biorhythms', () => {
	const { physical } = calculateBiorhythms('1995-01-01', '2020-02-18');
	expect(physical).toBeCloseTo(0.5196); // toBeCloseTo메소드는 값이 정확히 일치하지 않아도 아주 작은 차이허용
});
it('calculates the emotional biorhythms', () => {
	const { emotional } = calculateBiorhythms('1995-01-01', '2020-02-18');
	expect(emotional).toBeCloseTo(-0.901);
});
it('calculates the intellectual biorhythms', () => {
	const { intellectual } = calculateBiorhythms('1995-01-01', '2020-02-18');
	expect(intellectual).toBeCloseTo(0.8146);
});
