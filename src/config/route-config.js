module.exports = {
  init(app){
    const staticRoutes = require("../routes/static.js");
    const topicRoutes = require("../routes/topics.js");
    const postRoutes = require("../routes/posts.js");
    const userRoutes = require("../routes/users.js");
    const commentRoutes = require("../routes/comments.js");
    const voteRoutes = require("../routes/votes.js");
    const favoriteRoutes = require("../routes/favorites");


    if(process.env.NODE_ENV === "test") {
      const mockAuth = require("../../spec/support/mock-auth.js");
      mockAuth.fakeIt(app);
    }

    app.use(staticRoutes);
    app.use(topicRoutes);
    app.use(postRoutes);
    app.use(userRoutes);
    app.use(commentRoutes);
    app.use(voteRoutes);
    app.use(favoriteRoutes);
  }
}
