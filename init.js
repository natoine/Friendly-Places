const generatePlace = () => {
	const places = [
		{name: 'Fairview', city: 'Montpellier', location: {lt: '43.6117398', lg: '3.8767571'}},
		{name: 'La Panacée', city: 'Montpellier', location: {lt: '43.6069957', lg: '3.87536'}},
		{name: 'L\'Heure bleue', city: 'Montpellier', location: {lt: '43.6007398', lg: '3.8767571'}},
		{name: 'La Mezzanine', city: 'Montpellier', location: {lt: '43.6117398', lg: '3.8767571'}},
		{name: 'Le Café Bun', city: 'Montpellier', location: {lt: '43.6117398', lg: '3.8767571'}}
	]
	places.map(place => world.new(place))
}