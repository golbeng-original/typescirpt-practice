
const method1 = async () => {
    console.log('async method1')
}

async function method2() {
    console.log('async method2')
}

const method3 = async function() {
    console.log('async method3')
}

type someMethod = () => Promise<void>
type someIntMethod = () => Promise<number>