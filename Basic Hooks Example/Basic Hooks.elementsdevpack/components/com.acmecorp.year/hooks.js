const transformHook = (rw) => {

	const d = new Date();
	let year = d.getFullYear();

	rw.setProps({
		year,
	})
}
exports.transformHook = transformHook;

