import { SassInput, SassInputTypes } from "./types";
interface Variables {
    [key: string]: SassInputTypes;
}
interface Output {
    result: string;
    variables: Variables;
    variablesString: string;
}
export declare const toSassValue: (input: SassInputTypes, key?: string) => Output;
export declare const toSassObject: (input: SassInput) => Output;
export declare const toSassVariables: (input: SassInput) => Output;
export declare const toSassType: (input: any) => SassInputTypes;
export declare const fixSassTypes: (input: Object) => SassInput;
export {};
//# sourceMappingURL=convert.d.ts.map