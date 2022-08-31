#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    row = len(matrix)
    column = len(matrix[0])
    new = [[0 for _ in range(column)] for _ in range(row)]

    # iterate through columns of matrix
    for i in range(column):
        # iterate through rows of matrix
        for j in range(row):
            new[i][j] += matrix[i][j] * matrix[i][j]

    return new
