
const fetchData = () => {
    const promise = new Promise((resolve, reject) => setTimeout(() => {
        resolve('Good')
    }, 1500))
    return promise;
}

setTimeout(() => {
    fetchData().then(res => { console.log(res); return fetchData() }).then(resp => console.log(resp));
}, 0.1);

console.log('hello');