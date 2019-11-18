const { askForCookiesRecipesRouter } = require('./cookiesRecipes');

function cookiesRecipeRoutes(app) {
    app.use('/', askForCookiesRecipesRouter)
}

module.exports = {
    cookiesRecipeRoutes
}