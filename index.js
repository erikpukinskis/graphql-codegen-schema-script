module.exports = {
  plugin(schema, documents, config) {
    const source = schema.extensions.sources.map(({ body }) => body).join("\n")
    return `import gql from "graphql-tag"
export default gql\`
${source}
\`
`;
  }
}