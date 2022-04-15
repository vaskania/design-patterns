const networkFetch = (url) => {
    return `${url} - Answer from Server`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if (cache.has(url)) {
            return `${url} - Answer from Cache `
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('reactjs.org'))
console.log(proxiedFetch('reactjs.org'))