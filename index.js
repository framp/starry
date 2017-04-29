module.exports = (state = {}, listeners = {}) => ({
	state: () => state,
	run: reduce => event =>
		Promise.resolve(reduce(state, event))
			.then(result => state = result)
			.then(listeners.change)
			.catch(listeners.error),
	on: (type, callback) => listeners[type] = callback
})