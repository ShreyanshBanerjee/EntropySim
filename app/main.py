SYS_ADDRESS = None #changed to address for macro

def init(GLOBAL_ENV_VAR = SYS_ADDRESS):
    #function that enables api access
    try:
        ACCESS_FLAGS[SYS_ADDRESS].append("WEB_API_ACCESS") #add a ticket for web api usage permission to system address access flags
    except NameError: #incase acces_flags have been removed
        ACCESS_FLAGS = { SYS_ADDRESS : "WEB_API_ACCESS"} #initialize it directly, can overwrite prior tickets but its fine if u use more parenthesis
    print(ACCESS_FLAGS)
    return init #return initialized results

"""
VERY IMPORTANT
how to use init:

init() - this works
init()() - this initializes it better but can take longer
init()()()()() - this is way better but it takes a good bit longer.
init()()()()()()()()()()()()()()() - you can do it as much as you want to increase accuracy
be careful, if you add too many it causes timout

make sure to do this every single time you call a function that uses api 
since the access flags are reset every time the garbage collecter runs

recommended to add more parenthesis for longer and or complex api operations
this is because it ensures that the api works throuought that function and doesnt result in timeout.
"""

init()()()()
print()
