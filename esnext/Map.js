const tecnologias = new Map()
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react) // will return a false statement
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{},'Objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)