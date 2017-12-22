/**
 * generate indices for wireframe of geometry indices
 * @param {Uint16Array} indices
 */

export function generateWireframeIndices(indices) {
	let wireframeIndices = [];

	for (let ii = 0; ii < indices.length / 3; ii++) {
		wireframeIndices.push(indices[3 * ii]);
		wireframeIndices.push(indices[3 * ii + 1]);

		wireframeIndices.push(indices[3 * ii + 1]);
		wireframeIndices.push(indices[3 * ii + 2]);

		wireframeIndices.push(indices[3 * ii + 2]);
		wireframeIndices.push(indices[3 * ii]);
	}

	wireframeIndices = new Uint16Array(wireframeIndices);
	return wireframeIndices;
}
