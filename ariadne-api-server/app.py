from ariadne import gql, make_executable_schema
from ariadne.asgi import GraphQL
from ariadne.asgi.handlers import GraphQLWSHandler
from ariadne.explorer import ExplorerPlayground

from queries import query
from subscriptions import subscription


# Define GraphQL types
type_defs = gql(
    """
    type Query {
        people: [Person!]!
    }

    type Subscription {
        counter: Int!
    }

    type Person {
        firstName: String
        lastName: String
        age: Int
        fullName: String
    }
"""
)


# Create executable GraphQL schema
schema = make_executable_schema(type_defs, query, subscription)

# Create an ASGI app using the schema, running in debug mode
app = GraphQL(
    schema,
    websocket_handler=GraphQLWSHandler(),
    debug=True,
    explorer=ExplorerPlayground(),
)
