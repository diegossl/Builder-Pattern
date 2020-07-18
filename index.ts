import Director from './src/Director'
import ConcreteBuilder1 from './src/ConcreteBuilder1'

function clientCode(director: Director) {
  const builder = new ConcreteBuilder1()
  director.setBuilder(builder)

  console.log('Standard basic product:')
  director.buildMinimalViableProduct()
  builder.getProduct()?.listParts()

  console.log('Standard full featured product:')
  director.buildFullFeaturedProduct()
  builder.getProduct()?.listParts()

  console.log('Custom product:')
  builder.producePartA()
  builder.producePartC()
  builder.getProduct()?.listParts()
}

const director = new Director()
clientCode(director)