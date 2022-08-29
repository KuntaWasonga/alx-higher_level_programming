#!/usr/bin/python3
def no_c(my_string):
    """This function removes all characters c and C from a string."""
    copy = [x for x in my_string if x != 'C' and x != 'c']
    return("".join(copy))
