// A. METHOD
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

const tes = 'abcdefghijklmnopqrstuvwxyz'

// String length
const length = tes.length
console.log(length)

// String slice
const slice = tes.slice(3, 10) // dari setelah 3 sampe ke 10
const slice2 = tes.slice(5)
const slice3 = tes.slice(-11, -5) // dari setelah 5 sampe akhir
console.log(slice)
console.log(slice2)
console.log(slice3)

// String substring
const subs = tes.substring(3, 10) //dari setelah 3 sampe ke 10
const subs2 = tes.substr(3, 10) // dari 3, sebanyak 10=
const subs3 = tes.substr(-2)
console.log(subs)
console.log(subs2)
console.log(subs3)

// String Replace
const txt = "Nama Saya Andi dan Andi"
const replace = txt.replace("Andi", "Yazid") // hanya mengubah yang pertama
const replace2 = txt.replace(/Andi/g, "Yazid") // untuk mengubah semua yang ada Andi
const replace3 = txt.replaceAll("Andi", "Yazid") // sama seperti replace2
console.log(replace)
console.log(replace2)
console.log(replace3)

// String concat
const txt1 = "Nama Saya"
const txt2 = "Yazid"
const concat = txt1.concat(" ", txt2)
console.log(concat)
console.log(txt1 + " " + txt2)

// B. SEARCH
    // String indexOf()
    // String lastIndexOf()
const indexof = "please locate where text occurs!"
const indexof2 = indexof.indexOf("locate")
const indexof3 = indexof.lastIndexOf("john")
const indexof4 = indexof.lastIndexOf("locate", 15)
console.log(indexof2)
console.log(indexof3)
console.log(indexof4)

    // String search()
console.log(indexof.search("locate"))
console.log(indexof.search(/locate/))

    // String match()
console.log(indexof.match("ase"))
console.log(indexof.match(/ase/)) //Perform a search for "ain"
console.log(indexof.match(/ase/g)) //Perform a global search for "ain"
console.log(indexof.match(/ase/gi)) //Perform a global, case-insensitive search for "ain"

    // String matchAll() 
    //The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
console.log(indexof.matchAll("ate"))
console.log(indexof.matchAll(/ate/g)) // If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
console.log(indexof.matchAll(/ate/gi)) //If you want to search case insensitive, the insensitive flag (i) must be set:

    // String includes() / the output return boolen
console.log(indexof.includes("please")) //Check if a string includes "please"
console.log(indexof.includes("test")) //Check if a string includes "test"
console.log(indexof.includes("please", 0))

    // String startsWith()
    //The startsWith() method returns true if a string begins with a specified value.
console.log(indexof.startsWith("please")) // return true
console.log(indexof.startsWith("locate")) // return false
console.log(indexof.startsWith("locate", 7)) // return true

    // String endsWith()
console.log(indexof.endsWith("please")) // return false
console.log(indexof.endsWith("!")) // return true
console.log(indexof.endsWith("text", 21)) // return false