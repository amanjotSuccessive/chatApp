const { graphql, buildSchema } = require('graphql');
const { mongoConnectionInit } = require('./collection');
(async function () {
    await mongoConnectionInit();
})();

/* const schema = buildSchema(`type Query {
    hello: String
}`);

const root = { hello: () => 'Hello World!' };

graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
})
 */