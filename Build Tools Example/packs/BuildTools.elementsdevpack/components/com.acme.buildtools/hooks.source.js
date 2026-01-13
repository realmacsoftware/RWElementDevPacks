const transformHook = (rw) => {
	const { message } = rw.props;

	const classes = [globalSpacing(rw), globalBorders(rw)].join(" ");

	rw.setProps({
		message,
		classes
	});
}

exports.transformHook = transformHook;
