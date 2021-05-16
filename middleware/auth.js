module.exports = {
	ensureAuth: function (req, res, next) {
		if (req.isAuthenticated()) {
			return next()
		} else {
			res.status(401).json({ message: 'Not authorized' })
		}
	},
	ensureGuest: function (req, res, next) {
		if (!req.isAuthenticated()) {
			return next()
		} else {
			res.redirect('/profile')
		}
	},
}
