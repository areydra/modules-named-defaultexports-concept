export class Person { //mengexport class Person agar bisa digunakan di file yg berbeda (contoh di file teacher.js)
    constructor(name){
        this.name = name
    }

    walk(){
        console.log("walk")
    }
}