Stitcher = require('./stitcher').Stitcher;

var project = '/Users/fgonda/Desktop/projects/ir_rgb_rawdata/3/project.pto'
var stitcher = new Stitcher();

stitcher.stitch( project ).then(
	function success() 
	{
		console.log('done stitching project');
	},
	function fail()
	{
		console.log('error stitching project');
	}
);
