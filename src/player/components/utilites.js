import React from 'react';


function leftPad(number) {
	const pad = '00';
	return pad.substring(0, pad.length - number.length) + number;
}

function formattedTime(secs) {
	const minutes = parseInt(secs / 60, 10)
	const seconds = parseInt(secs % 60, 10)

	return `${minutes} : ${leftPad(seconds.toString())}`
}

export default formattedTime;