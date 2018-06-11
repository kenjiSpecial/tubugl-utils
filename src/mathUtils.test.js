import { clamp, randomFloat, mix } from './mathUtils';

test('test randomFloat', () => {
	let rand = randomFloat(10, 20);
	expect(rand).toBeLessThan(20);
	expect(rand).toBeGreaterThan(10);
});

test('test clamp', () => {
	let val0 = clamp(2, 3, 5);
	expect(val0).toEqual(3);

	let val1 = clamp(5, 4, 6);
	expect(val1).toEqual(5);

	let val2 = clamp(7, 4, 6);
	expect(val2).toEqual(6);
});

test('test mix', () => {
	let val = mix(1, 3, 0.5);
	expect(val).toEqual(2);
});
