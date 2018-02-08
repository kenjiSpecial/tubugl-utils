/**
 * generate indices for wireframe of geometry indices
 * @param {Uint16Array} indices
 */

export function generateWireframeIndices(indices, isUint16Array = true) {
	let wireframeIndices = [];

	for (let ii = 0; ii < indices.length / 3; ii++) {
		wireframeIndices.push(indices[3 * ii]);
		wireframeIndices.push(indices[3 * ii + 1]);

		wireframeIndices.push(indices[3 * ii + 1]);
		wireframeIndices.push(indices[3 * ii + 2]);

		wireframeIndices.push(indices[3 * ii + 2]);
		wireframeIndices.push(indices[3 * ii]);
	}

	wireframeIndices = isUint16Array ? new Uint16Array(wireframeIndices) : new Uint32Array(wireframeIndices);
	return wireframeIndices;
}

/**
 * load json file
 * @param {string} fileDir
 * @param {string} callback
 */
export function loadJSON(fileDir, callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType('application/json');
	xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == '200') {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
