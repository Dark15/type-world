type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

// type First<T extends any[]> = T extends [] ? never : T[0]