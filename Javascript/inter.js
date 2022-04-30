/*
var intersect = function(nums1, nums2) {
    let arrA = nums1.sort();                             
    let arrB = nums2.sort();
    let match = arrA.filter(nummy => arrB.indexOf(nummy) !== -1);
    if (match > )                                                                                                        
};
*/


var intersect = function(nums1, nums2) {
    let smallMap = {};
    let map = {};
    let bigger;
    let smaller; 
    if (nums1.length > nums2.length) {
        bigger = nums1;
        smaller = nums2;
    } else {
        bigger = nums2;
        small = nums1;
    }
    for (let val of bigger) {
        if (map[val]) {
            map[val] = map[val] + 1;
        } else {
            map[val] = 1;
        }
        
    }
    for (let val of smaller) {
        if (smallMap[val]) {
            smallMap[val] = smallMap[val] + 1;
        } else {
            smallMap[val] = 1;
        }
    }
    let ans = [];
    for (let cur of Object.keys(map)) {
        const smallValue = smallMap[cur]; 
        if (smallValue === undefined) {
            continue;
        } else { 
            let frequency = 0;
            if(map[cur] > smallMap[cur]) {
                frequency = smallMap[cur];
            } else {
                frequency = map[cur];
            }
            for (let i = 0; i < frequency; i++) {
                ans.push(cur);
            }
        }
    }
   return ans;
}



console.log(intersect([1,2,2,1,2],[2,2]));
// big
// 5: 2     
// 7: 3     
// 

//small
//7: 2      