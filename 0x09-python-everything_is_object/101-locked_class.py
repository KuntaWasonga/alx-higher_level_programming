#!/usr/bin/python3
"""Contains a class that avoids dynamically created attributes."""


class LockedClass:
    """Prevents user from instantiating new LockedClass attributes
    for anything but attributes called 'first_name'."""
    __slots__ = ['first_name']

    def __init__(self):
        """Initialisation method"""
        pass
