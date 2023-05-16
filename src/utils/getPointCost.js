// Helper function to get the point cost for an attribute value
export const getPointCost = (value) => {
    if (value < 3 || value > 18) {
        return null; // or throw an error
    }
    return {
        3: -9,
        4: -6,
        5: -4,
        6: -2,
        7: -1,
        8: 0,
        9: 1,
        10: 2,
        11: 3,
        12: 4,
        13: 5,
        14: 7,
        15: 9,
        16: 12,
        17: 15,
        18: 19,
    }[value];
};