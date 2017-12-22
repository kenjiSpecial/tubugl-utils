/**
 * generate indices for wireframe of geometry indices
 * @param {Uint16Array} indices
 */

export function generateWireframeIndices(indices) {
	let wireframeIndices = [];

	for (let ii = 0; ii < indices.length - 1; ii++) {
		wireframeIndices.push(indices[ii]);
		wireframeIndices.push(indices[ii + 1]);
	}

	wireframeIndices = new Uint16Array(wireframeIndices);
	return wireframeIndices;
}
