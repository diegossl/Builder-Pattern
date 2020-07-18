import Builder from './Builder'

class Director {

  private builder: Builder | undefined

  public setBuilder(builder: Builder): void {
      this.builder = builder
  }

  public buildMinimalViableProduct(): void {
      this.builder?.producePartA()
  }

  public buildFullFeaturedProduct(): void {
      this.builder?.producePartA()
      this.builder?.producePartB()
      this.builder?.producePartC()
  }
}

export default Director