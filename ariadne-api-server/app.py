from ariadne import gql, load_schema_from_path, make_executable_schema
from ariadne.asgi import GraphQL
from ariadne.asgi.handlers import GraphQLWSHandler
from ariadne.explorer import ExplorerPlayground

from queries import query
from subscriptions import subscription


type_defs = load_schema_from_path("../schema.graphql")


# Create executable GraphQL schema
schema = make_executable_schema(type_defs, query, subscription)

# Create an ASGI app using the schema, running in debug mode
app = GraphQL(
    schema,
    websocket_handler=GraphQLWSHandler(),
    debug=True,
    explorer=ExplorerPlayground(),
)
