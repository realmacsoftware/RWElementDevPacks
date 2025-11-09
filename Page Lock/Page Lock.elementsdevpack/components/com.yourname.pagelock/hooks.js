const transformHook = (rw) => {
	const { assetPath } = rw.component;
	
	rw.setProps({
		assetPath
	});
}

exports.transformHook = transformHook;