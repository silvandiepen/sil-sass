import { SassInput, SassInputTypes, SassOutput } from "./types";
export declare const toSassValue: (input: SassInputTypes, key?: string) => SassOutput;
export declare const toSassObject: (input: SassInput) => SassOutput;
export declare const toSassVariables: (input: SassInput) => SassOutput;
export declare const toSassType: (input: any) => SassInputTypes;
export declare const fixSassTypes: (input: Object) => SassInput;
//# sourceMappingURL=convert.d.ts.map