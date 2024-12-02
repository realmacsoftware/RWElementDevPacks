const transformHook = (rw) => {    
	// Extract the slider property
	const { slider } = rw.props;

	rw.setProps({
		slider : slider * 2,
	})
}
exports.transformHook = transformHook;