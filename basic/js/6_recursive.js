function recurrsive(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * recurrsive(n-1);
}

console.log(recurrsive(5));