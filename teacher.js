import { Person } from './person' //mengimport { class Person } dari file person.js

export function promote(){} 

//menjadikan class Teacher sebagai default export(artinya tinggal dipanggil tanpa menggunakan kurung kurawa, cek di file index.js)
export default class Teacher extends Person{ //menjadikan teacher sebagai inheritance Person (semua function dan variabel dari Person bisa di akses di Teacher)
    constructor(name, degree){ 
        super(name) //memberikan value pada constructor Person (karna parameter constructor didalam parent(Person) wajib diisi)
        this.degree = degree
    }

    teach(){
        console.log("teach")
    }
}