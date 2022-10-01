const array = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];
function treeSum(ar) {
    let sum = 0;
    for (let item of ar) {
        if (Array.isArray(item)) {
            sum += treeSum(item);
        } else {
            sum += item;
        }
    }
    return sum;
}