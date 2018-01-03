import { generateWireframeIndices } from './utils';

test('test generateWireframeIndices', () => {
	const array = [0, 1, 2];
	const resArr = generateWireframeIndices(array);
	expect(resArr).toEqual(new Uint16Array([0, 1, 1, 2, 2, 0]));
});
