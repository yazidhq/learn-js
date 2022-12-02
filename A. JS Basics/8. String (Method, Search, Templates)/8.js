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
const subs2 = tes.substr(3, 10) // dari 3, sebanyak 10
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