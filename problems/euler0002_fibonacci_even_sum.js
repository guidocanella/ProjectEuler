/**
 * By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.
 * @param n
 * @returns
 */
function fiboEvenSum(n) {
    if (n==1) return 0;
    if (n==2) return 2;
    let s=2;
    for(let i=3, f1=1, f2=2; i<=n; i++) {
        let f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        if (f2%2==0) s += f2;
    }
    return s;
}