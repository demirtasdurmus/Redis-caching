const UserInfo = require("./user_info");
const Post = require("./post");

// table relationships
UserInfo.hasMany(Post);
Post.belongsTo(UserInfo);

module.exports = { UserInfo, Post };
