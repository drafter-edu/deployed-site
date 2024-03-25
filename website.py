from drafter import *
from dataclasses import dataclass

@dataclass
class State:
    pass


@route
def index(state: State) -> Page:
    return Page(state, ["Hello World!"])

hide_debug_information()

start_server(State("", False))