/*
LEETCODE: 733

An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood 
fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same 
color), and so on. Replace the color of all of the aforementioned pixels with
color.

*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, color) {
    
    return floodFill2(image, sr, sc, color, image[sr][sc]);
};

var floodFill2 = function(image, sr, sc, color, oc) {
    // sr === m === image
    // sc === n === image[0]
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
        return image;
    }

    if(image[sr][sc] === color) {
        return image;
    }

    if(image[sr][sc] === oc) {
        image[sr][sc] = color;

        image = floodFill2(image, sr-1, sc, color, oc);
        image = floodFill2(image, sr+1, sc, color, oc);
        image = floodFill2(image, sr, sc-1, color, oc);
        image = floodFill2(image, sr, sc+1, color, oc);
    } 
    
    return image;
};