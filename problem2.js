var fib_sum = 2, temp;
var t1 = 1, t2 =2;
var fib = function() {
	while(t2 < 4000000) {
		temp = t1;
		t1 = t2;
		t2 = temp + t2;
		if(t2 < 4000000) {
			if(t2 % 2 == 0) {
				fib_sum += t2;
			}
		}
	}
console.log(fib_sum);
}

fib();
