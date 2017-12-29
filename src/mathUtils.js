/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
export function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}

/**
 * return random number between minimum value and maximum value
 *
 * @param {number} minValue
 * @param {number} maxValue
 *
 * @return{number}
 */
export function randomFloat(minValue, maxValue) {
	let value = minValue + (maxValue - minValue) * Math.random();
	return value;
}
