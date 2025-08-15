function toCase(text) {
  // write your code here
	let res1=text.toLowerCase();
	let res2=text.toUpperCase();

	return res1+"-"+res2;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
