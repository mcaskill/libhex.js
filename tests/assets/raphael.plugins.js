/*!
 * Raphael Methods Plugin
 */

Raphael.fn.toPathString = function (points, closed) {
	var path = 'M';

	for (var p = 0; p < points.length; p++) {
		path += (p > 0 ? 'L' : '') + points[p].x +' '+ points[p].y;
	}

	return path + (closed ? 'z' : '');
}

Raphael.st.getCenter = Raphael.el.getCenter = function () {
	var bbox = this.getBBox();

	return (bbox ? { x: bbox.x + (bbox.width / 2), y: bbox.y + (bbox.height / 2), rx: bbox.width / 2, ry: bbox.height / 2 } : false);
}