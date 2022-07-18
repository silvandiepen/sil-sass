export type SassInputTypes = string | number | boolean | (boolean | string | number)[];
export interface SassInput{
    [key: string]: SassInputTypes ;
}