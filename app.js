console.log('ciao')


for (let i=0; i<=100; i++){

    let n = i + 1

    const resto = i % 3
    const resto5 = i % 5

    let result = n

    // console.log(i, resto)



     if (resto === 0 && resto5 === 0){
         console.log(i, 'fizzbuzz')
     }

     else if (resto === 0){
        console.log ('fizz')
     }

     else if (resto5 === 0){
        console.log ('buzz')
     }

     console.log (result)
}


// for (let i=5; i<=100; i++){


//     const resto = i % 5


//     console.log(i, resto)



//      if (resto === 0){
//          console.log('buzz')
//      }
// }




