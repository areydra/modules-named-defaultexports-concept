import Teacher, { promote } from "./teacher"; //import export default class Teacher dari file teacher.js dan export { function promote }
import { Component } from "react"; //import export class Component dari module react

const teacher = new Teacher('Areydra', 'SMK')
teacher.teach() //menggunakan function teach yg berada di class Teacher
teacher.walk() //menggunakan function walk dari inheritance Teacher yg berparent Person (cek di file teacher dan person untuk penjelassan)

//NOTE : saat mengimport export default dari sebuah file tidak perlu menggunakan kurung kurawa. contoh import Teacher(karna teacher adalah export default)
//NOTE : (./) menandakan bahwa yg di import adalah file, sedangkan module tidak perlu. contoh diatas mengimport file teacher dan modul react