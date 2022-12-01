#!/usr/bin/node
exports.esrever = function (list) {
    let len = list.length - 1;
    let i = 0;

    while ((len - i) > 0) {
        const alt = list[len];
        list[len] = list[i];
        list[i] = alt;
        i++;
        len--;
    }
    return list;
};