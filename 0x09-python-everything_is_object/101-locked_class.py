#!/usr/bin/python3
"""Contains a class that avoids dynamically created attributes."""


class LockedClass:
    __slots__ = ['first_name']

    def __init__(self):
        """Initialisation method"""
        pass
