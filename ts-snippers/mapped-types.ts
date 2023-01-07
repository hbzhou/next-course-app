export {};

type Fruit = {
  name: string;
  color: string;
  mass: number;
};

// mapped type
type MyFruitRecord = { [FruitKey in "apple" | "cherry"]: Fruit };

type MyRecord<KeyType extends string, ValueType> = { [Key in KeyType]: ValueType };

type PickWindowProperties<Keys extends keyof Window> = { [Key in Keys]: Window[Key] };

type PartWindowProperties = PickWindowProperties<"document" | "navigator">;

const partOfWindowProperties: PartWindowProperties = {
  document: new Document(),
  navigator: new Navigator(),
};

const pickInstance: Pick<Window, "document" | "setTimeout"> = {
  document: new Document(),
  setTimeout: function (handler: TimerHandler, timeout?: number | undefined, ...args: any[]): number {
    throw new Error("Function not implemented.");
  },
};

interface DataState {
  digits: number[];
  names: string[];
  flags: Record<"darkMode" | "mobile", boolean>;
}

type DataSDK = {
  // The mapped type
  [K in keyof DataState as `set${Capitalize<K>}`]: (arg: DataState[K]) => void;
};

function load(dataSDK: DataSDK) {
  dataSDK.setDigits([14]);
  dataSDK.setNames(["test"]);
  dataSDK.setFlags({ darkMode: true, mobile: false });
}
