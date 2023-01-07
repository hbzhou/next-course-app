export {};
// a set of four specific things
type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number };

type StringColors = Extract<FavoriteColors, string>;

type ObjectColors = Extract<FavoriteColors, { red: number }>;

type TupleColors = Extract<FavoriteColors, [number, number, number]>;

type neverType = Extract<FavoriteColors, [number]>;

type nonStringColors = Exclude<FavoriteColors, string>;

type nonNumberTupleColors = Exclude<FavoriteColors, [number, number, number]>;
