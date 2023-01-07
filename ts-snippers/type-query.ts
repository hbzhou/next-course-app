type DatePropertyNames = keyof Date & symbol;

async function main() {
  const apiResponse = await Promise.all([fetch("https://example.com"), Promise.resolve("Titanium White")]);

  type ApiResponseType = typeof apiResponse;
}

class Fruit {
  constructor(public readonly name: string, public readonly mass: number, public readonly color: string) {}

  static createBanana() {
    return new Fruit("banana", 108, "yellow");
  }
}

const MyFruit = Fruit;

// const MyFruit: typeof Fruit;
const banana = Fruit.createBanana();

const x = 11;
const yesOrNoType = x > 0 ? "yes" : "no";

export {};
