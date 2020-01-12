const createPages = require(`./pageCreators/createPages`)
const onCreateNode = require(`./pageCreators/onCreateNode`)


exports.onCreateNode = onCreateNode.default
exports.createPages = createPages.default
