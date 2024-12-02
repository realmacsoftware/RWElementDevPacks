const transformHook = (rw) => {    

	let myArray = [1, 2, 3, 4, 5, 6,7,8];
	//Could use this instead if we need a bigger number, would be cleaner.
	//let myArray = Array(slider).fill(0);
	
	rw.setProps({
		myArray
	})
}
exports.transformHook = transformHook;