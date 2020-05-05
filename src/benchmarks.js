const Immutable = require("immutable");
const b = require("benny");
const elementCount = 1000000;
const list = Immutable.Range(0, elementCount).toList();
const predicate = e => e > 10;

b.suite(
    "Filter sorted immutable list",

    b.add("via filter", () => {
        list.filter(predicate);
    }),

    b.add("via skipUntil", () => {
        list.skipUntil(predicate);
    }),

    b.add("via findIndex/takeLast", () => {
        list.takeLast(list.size - list.findIndex(predicate));
    }),

    b.cycle(),
    b.complete()
);
