// Create a function called transformHook that receives the rw API object
const transformHook = (rw) => {

	// Get all node properties from rw and output to the log
	// console.log(rw.props);

	// Extract the switch property
	const { display } = rw.props;
	console.log(display)
	console.log("Hooks: " + display)

	rw.setProps({
		//display: 1
	});
};

// Register the transformHook function with Elements
exports.transformHook = transformHook;
