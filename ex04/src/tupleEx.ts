
let tuple:[boolean, string] = [true, 'the result is ok']


function printTuple() {
    const [value, msg] = tuple

    console.log(`value = ${value}, msg = ${msg}`)
}

export default printTuple