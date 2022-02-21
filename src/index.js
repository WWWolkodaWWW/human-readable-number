module.exports = function toReadable(number) {

	number = String(number);
	let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundred = 'hundred';

	for (i = 0; i < number.length; i++) {

		if (number.length === 1) {
			j = number;
			return zeroToNine[j];
		}

		else if (number.length === 2) {
			j = number[0];
			e = number[1];

			if (j === '1') {
				return tenToNineteen[e];
			}

			else if (e === '0') { 
				return twentyToNinety[j];
			}

			else { 
				return twentyToNinety[j] + " " + zeroToNine[e];
			}
		}

		else if (number.length === 3) {
			j = Math.floor(number / 100);
			e = number[1];
			f = number[2];

			if (e === '0' && f === '0') { 
				return zeroToNine[j] + " " + hundred;
			}
			
			else if (e === '0') {
				return zeroToNine[j] + " " + hundred + " " + zeroToNine[f];
			}

			else if (e === '1') {
				return zeroToNine[j] + " " + hundred + " " + tenToNineteen[f];
			}

			else if (f === '0') {
				return zeroToNine[j] + " " + hundred + " " + twentyToNinety[e];
			}

			else { 
				return zeroToNine[j] + " " + hundred + " " + twentyToNinety[e] + " " + zeroToNine[f];
			}
		}
	}
}
