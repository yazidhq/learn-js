// A. Number Method
// toString() :	Returns a number as a string
    const x = 123;
    const y = x.toString()
    console.log(typeof(y))

// toExponential() :	Returns a number written in exponential notation
    const ex = 9.141
    console.log(ex.toExponential(2))
    console.log(ex.toExponential(4))
    console.log(ex.toExponential(6))

// toFixed() :	Returns a number written with a number of decimals
    console.log(ex.toFixed(0))
    console.log(ex.toFixed(2))
    console.log(ex.toFixed(4))
    console.log(ex.toFixed(6))

// toPrecision() :	Returns a number written with a specified length
    console.log(ex.toPrecision())
    console.log(ex.toPrecision(2))
    console.log(ex.toPrecision(4))
    console.log(ex.toPrecision(6))

// ValueOf () :	Returns a number as a number
    const val = 345
    console.log(val.valueOf())

// Converting Variables to Numbers
    // Number()
     const n = Number("John")
     const date = Number(new Date("2022-01-01"))
     console.log(typeof(n))
     console.log(typeof(date))

    // parseInt()
    const p = parseInt("1010.1")
    console.log(p);

    // parseFloat()
    const pf = parseFloat("10.100001")
    const pfx = parseFloat("10.123")
    console.log(pf);
    console.log(pfx);

//  Number Object Methods
    // Number.isInteger()
    console.log(Number.isInteger(10)) // return true
    console.log(Number.isInteger(10.5)) // return false

    // Number.isSafeInteger
    console.log(Number.isSafeInteger(10)) // return true
    console.log(Number.isSafeInteger(10809274194681398647242)) // return false

    // Number.parseFloat
    console.log(Number.parseFloat("10.1"))
    console.log(Number.parseFloat("10 years"))

    // Number.parseInt()
    console.log(Number.parseInt("10"))
    console.log(Number.parseInt("10.5")) // return 10



// B. Number Properties
    const np = 6
    // EPSILON
    console.log(Number.EPSILON)
    // MAX_VALUE
    console.log(np.MAX_VALUE)
    // MIN_VALUE
    console.log(Number.MIN_VALUE)
    // MAX_SAFE_INTEGER
    console.log(Number.MAX_SAFE_INTEGER)
    // MIN_SAFE_INTEGER
    console.log(Number.MIN_SAFE_INTEGER)
    // POSITIVE_INFINITY
    console.log(Number.POSITIVE_INFINITY)
    // NEGATIVE_INFINITY
    console.log(Number.NEGATIVE_INFINITY)
    // Not a Numer / NaN
    console.log(Number.NaN)