sortLetters([[1,'c',3],[3,2,'w','e']])

function sortLetters(arr) {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        for (let p = 0; p < arr[i].length; p++) {
            if (typeof arr[i][p] === 'string') {
                let up = arr[i][p].toUpperCase();
                if (up === 'A' || up === 'E' || up === 'I' || up === 'O' || up === 'U') {
                    a.push(up);
                } else {
                    b.push(up)
                }
            }
        }
    }
        let k = [];
        k.splice(0,0,a)
        k.splice(1,0,b)
        arr = k;
        return console.log(arr);
}


