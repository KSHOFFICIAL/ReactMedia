const a = ["apple"];
const it = a[Symbol.iterator]();
let result = it.next();

while (!result.done) {
    console.log(result);
    result = it.next();
  
}