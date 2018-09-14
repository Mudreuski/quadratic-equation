module.exports = function solveEquation(equation) {
	
	let a = +equation.split(' * x^2')[0];
	let workB = equation.split(' * x')[1];
	let b = +(workB.substring(3,4)+workB.substring(5));
	let workC = equation.split(' * x')[2];
	let c = +(workC.substring(1,2)+workC.substring(3));
	
	let discr = b * b - 4 * a * c;
	
	let x1 = Math.round((-b+Math.sqrt(discr))/(2*a));
	let x2 = Math.round((-1*b-Math.sqrt(discr))/(2*a));
	
	if (x1 > x2){
		var answer = [x2,x1];     					
	}
	else{
		var answer = [x1,x2];		
	}
	
	return answer;
}
