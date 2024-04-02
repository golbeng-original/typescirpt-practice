import { readFile } from "fs"

type ResolveType = (value:string) => void
type RejectType = (error:Error) => void

export const readFilePromise = (filename: string):Promise<string> => {

    // 이렇게도 표현 된다.
    if(filename.length == 0) {
        return Promise.reject(new Error('exception!!'))
    }

    if(filename === 'temp.txt') {
        return Promise.resolve('skip')
    }

    return new Promise<string>((resolve:ResolveType, reject:RejectType) => {
        try {
            // something logic
            resolve('okok')
        }
        catch(e) {
            reject(new Error(`${e}`))
        }
    })

    //return new Promise<string>((resolve, reject) => {
    //    readFile(filename, (error:Error | null, buffer:Buffer) => {
    //        if(error) {
    //            reject(error)
    //        }
    //        else {
    //            resolve(buffer.toString())
    //        }
    //    })
    //})
}