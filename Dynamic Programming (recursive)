/*
My recursive solution to a Dynamic Programming Question (Javascript)

our favourite resort has developed a new snowboarding run
with a sequence of jumping ramps. You want to figure out a way down the hill that has you maximizing the
amount of time you spend airborne. When you reach a ramp, you can either use the ramp to jump through
the air (possibly flying over one or more ramps), or shred past the ramp while staying on the ground. If
you fly over a ramp, you obviously can’t use that ramp to increase your air time.
You’ve assembled the following data: an array D[1, ..., n] where D[i] is the distance from the top of
the hill to the ith ramp, and an array L[1, ..., n] where L[i] is the distance any boarder who takes the ith
ramp will travel through the air. For simplicity, you may assume the array D is sorted by increasing order
on distance, so that the ramps are numbered down the mountain from 1 to n. For any index i, we let
N(i) denote the smallest index j such that D[j] > D[i] + L[i]. 
*/



function MA(D, L, mem, i) {
  
    // base case
    if(i >= D.length) {
        return 0;
    }

    // memoization 
    if(mem[i]) {
        return mem[i]
    }
    mem[i] = Math.max(MA(D, L, mem, N(D, L, i)) + L[i], MA(D, L, mem, i+1)) // note: can't do i++ (doesn't add till after recursion)
    return mem[i];
}

function N(D, L, i) {
    // touchdown after jump
    let td = L[i] + D[i]

    // skip over all jumps
    for(let j = i; j < D.length; j++) {
        if(td < D[j]) {
            return j;
        }
    }
    // puts us past the final jump
    return D.length + 1
}

// console log tests
let arr = []
console.log('Actual Max:  10    MA: ', MA([3, 4, 10, 12], [3, 5, 3, 5], arr, 0))
arr = []    // clear array
console.log('Actual Max:  10    MA: ', MA([1, 3, 5, 7, 9], [6, 4, 2, 10, 1], arr, 0))
arr = []
console.log('Actual Max:  5     MA: ', MA([1, 3, 5, 7, 9], [1, 1, 1, 1, 1], arr, 0))
