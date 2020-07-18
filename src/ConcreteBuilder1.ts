import Builder from './Builder'
import Product1 from './Product1'

class ConcreteBuilder1 implements Builder {

  private product: Product1 | undefined

  constructor() {
    this.reset()
  }

  public reset(): void {
    this.product = new Product1()
  }

  producePartA (): void {
    this.product?.parts.push('PartA1')
  }

  producePartB (): void {
    this.product?.parts.push('PartB1')
  }

  producePartC (): void {
    this.product?.parts.push('PartC1')
  }

  public getProduct(): Product1 | undefined {
    const result: Product1 | undefined = this.product
    this.reset()
    return result
  }
}

export default ConcreteBuilder1