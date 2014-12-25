var isPrime = function(number) {
	if(number === 2)
		return true;
	var num_of_factors = 0;
	for(var i = 2; i < number/2; i++) {
		if(number % i == 0)
			num_of_factors++;
	}
	if(num_of_factors == 0)
		return true;
	else
		return false;
}

var largest_prime_factor = function(number) {
	var largest = 0;
	for(var i = 2; i <= number/2; i++) {
		if(isPrime(i) && (number % i == 0)) {
			largest = i;
		}
	}
	console.log(largest);
}

largest_prime_factor(1994);
