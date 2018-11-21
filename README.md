TypeScript Enum as "map" as "reversed map" Demo
===============================================

```
npm install
npm run demo
```

For `FieldIdTypes[11]`, webstorm gives me an warning that "potential invalid target of the indexed access",
since the compiler can't make sure 11 is a valid index.

If we define 2 maps, it will be typesafe in both cases.

