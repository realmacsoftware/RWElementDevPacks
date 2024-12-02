const transformHook = (rw) => {    
	
	// Get pages from current project
	const pages = rw.pages
	
	// Set pages in our template data
	rw.setProps({ 
		pages
	})
}

exports.transformHook = transformHook;
