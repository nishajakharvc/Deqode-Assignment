export interface ICounterOptions {
  start?: number
  delta?: ((prev_delta?: number) => number) | number
}

export class Counter {
  private count: number
  private start: number
  private delta: (prev_delta?: number) => number | number

  constructor(options: ICounterOptions) {
    Object.assign(this, options)
    this.count = this.start
    this.delta =
      typeof options.delta == 'number'
        ? function(delta) {
            return delta + this.count
          }.bind(this, options.delta)
        : options.delta.bind(this)
  }
  /**
   *
   * @returns next count
   */

  public tick() {
    // Complete the function to meet following requirements:
    // Counter should move the count as per delta function
    this.count = this.delta(this.count)
    // Counter should return the new count value
    return this.count
  }

  public reset() {
    this.count = this.start
  }
}

// driver code below

// fix the code so that following works
let incrementCounter = new Counter({
  start: 0,
  delta: 5,
})

// fix the code so that following works
let decreementCounter = new Counter({
  start: 0,
  delta: -1,
})

let incrementCustomCounter = new Counter({
  start: 2,
  delta: curr_count => {
    // change the delta to return count^2
    return curr_count > 0 ? Math.pow(curr_count, 2) : 1
  },
})

// following doesn't work. Please fix it
let decreementCustomCounter = new Counter({
  start: 100,
  delta: curr_count => {
    return curr_count - 2
  },
})

console.log(incrementCustomCounter.tick())
console.log(incrementCustomCounter.tick())
console.log(incrementCustomCounter.tick())
