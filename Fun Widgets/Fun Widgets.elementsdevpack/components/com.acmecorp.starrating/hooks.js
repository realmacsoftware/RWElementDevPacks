const transformHook = (rw) => {
		
	// Get all node properties from rw and output to the log
	console.log(rw.props);

	// Extract the slider property
	const { starRating, emptyStarColor, starColor, starSize, starSpace } = rw.props;
	
	
  // Generate HTML based on the star rating
	  const generateStarsHTML = (starRating) => {
		const maxStars = 5; // Maximum number of stars
		let html = '';
	
		for (let i = 1; i <= maxStars; i++) {
		  if (i <= starRating) {
			// Filled star
			html += `<span class="${starColor} ${starSize}">★</span>`;
		  } else {
			// Empty star
			html += `<span class="${emptyStarColor} ${starSize}">★</span>`;
		  }
		}
	
		return `<div class="flex ${starSpace}">${html}</div>`;
	  };
	    
	  // Generate HTML based on the starRating value
		const starHTML = generateStarsHTML(starRating);

	// Set slider and message properties in our template data
	rw.setProps({
		starRating : starHTML
	});
}

