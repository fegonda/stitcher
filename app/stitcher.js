var EventEmitter = require("events").EventEmitter;
var spawn = require("child_process").spawn;
var util = require("util");
var _q = require('q');

var COMMAND = '/usr/local/bin/hugin_executor';

module.exports.Stitcher = Stitcher;


function Stitcher()
{
	EventEmitter.call(this);
}

util.inherits(Stitcher, EventEmitter);

Stitcher.prototype.stitch = function( project )
{
	var def = _q.defer();

	var args = ['--stitching', project];

	var pid = spawn(COMMAND, args);

	pid.stdout.on('data', function (data) {
		console.log('data: ' + data );
	});

	//pid.stderr.on('data', function (data) {
	pid.on('error', function (err) {
	
		def.reject( err );
        });

	pid.on('close', function (code) {
		def.resolve( null );
        });

	return def.promise;
}
