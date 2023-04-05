from ariadne import QueryType


query = QueryType()


@query.field("hello")
def hello_resolver(*_):
    return "world"
