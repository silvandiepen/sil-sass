export type SassInputTypes =
  | string
  | number
  | boolean
  | (boolean | string | number)[];
  
export interface SassInput {
  [key: string]: SassInputTypes;
}

export interface SassVariables {
  [key: string]: SassInputTypes;
}
export interface SassOutput {
  result: string;
  variables: SassVariables;
  variablesString: string;
}
