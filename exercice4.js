const paires = [
    { a: 0, b: "" },
    { a: 0, b: "0" },
    { a: 0, b: false },
    { a: "", b: false },
    { a: null, b: undefined },
    { a: null, b: false },
    { a: NaN, b: NaN },
    { a: 1, b: "1" },
    { a: " \t\n ", b: 0 }
];

let compteurDifferences = 0;
for (let i = 0; i < paires.length; i++) {
    const paire = paires[i];
    const a = paire.a;
    const b = paire.b;
    const resultatEgaliteSimple = (a == b);
    const resultatEgaliteStricte = (a === b);
    const aStr = formatValue(a);
    const bStr = formatValue(b);
    console.log(`${aStr} == ${bStr} -> ${resultatEgaliteSimple}    |   ${aStr} === ${bStr} -> ${resultatEgaliteStricte}`);
    if (resultatEgaliteSimple !== resultatEgaliteStricte) {
        compteurDifferences++;
    }
}

console.log("---");
console.log(`${compteurDifferences} paire(s) où == et === donnent des résultats différents`);
function formatValue(val) {
    if (val === null) 
        return "null";
    if (val === undefined) 
        return "undefined";
    if (typeof val === "string") {
        if (val === "") 
            return '""';
        if (val === " \t\n ") 
            return '" \\t\\n "';
            return `"${val}"`;
    }
    if (typeof val === "number" && isNaN(val)) 
        return "NaN";
        return String(val);
}