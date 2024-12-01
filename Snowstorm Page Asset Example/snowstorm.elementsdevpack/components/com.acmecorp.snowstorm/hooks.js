const transformHook = (rw) => {

	// Extract the slider property
	const { assetPath } = rw.component;
	
	// Set slider and message properties in our template data
	rw.setProps({
		assetPath
	});
}

exports.transformHook = transformHook;