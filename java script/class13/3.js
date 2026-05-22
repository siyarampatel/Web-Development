// ==================== STRING BASICS ====================

let str = "siyaram";
console.log("Original string:", str);
console.log("Character at index 1:", str[1]);

// ==================== TEMPLATE LITERALS ====================

let specialString = `This is template literal`;
console.log("\nTemplate Literal:", specialString);

let obj = {
    item: "pen",
    price: 5
};

// Normal concatenation
console.log("Cost of", obj.item, "is", obj.price, "rupees");

// Using Template Literal (String Interpolation)
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Template literal with expression
let strWithExpression = `Siyaram Patel ${1 + 2 + 3}`;
console.log(strWithExpression);

// ==================== ESCAPE CHARACTERS ====================

console.log("\nEscape Characters:");
console.log("siyaram \n patel");   // New line
console.log("siyaram \t patel");   // Tab

// Length with escape characters
let str1 = "siyaram patel";
let str2 = "siyaram\npatel";
let str3 = "siyaram\tpatel";

console.log("Length of normal string:", str1.length);
console.log("Length with \\n:", str2.length);
console.log("Length with \\t:", str3.length);

// ==================== STRING METHODS ====================

let name = "siyaram patel";

// Immutability demonstration
name.toUpperCase();           // This doesn't change the original
console.log("\nOriginal string (immutable):", name);
console.log("Uppercase:", name.toUpperCase());

// trim()
let strWithSpaces = "   ram  1008   ";
console.log("After trim():", strWithSpaces.trim());

// slice()
let digits = "123456";
console.log("slice(0,4):", digits.slice(0, 4));
console.log("slice(4):", digits.slice(4));

// concat()
let strA = "siya";
let strB = "ram";
console.log("Concat using method:", strA.concat(strB));
console.log("Concat using + operator:", strA + strB);

// replace() and replaceAll()
let greeting = "hello";
console.log("\nReplace examples:");
console.log(greeting.replace("h", "o"));
console.log(greeting.replace("ll", "o"));
console.log(greeting.replaceAll("l", "o"));
console.log(greeting.replace("e", "o"));

// charAt()
let fullName = "siyaram patel";
console.log("\nCharacter at index 0:", fullName.charAt(0));

// Modify string using replace
let modified = fullName.replace("s", "r");
console.log("After replacing 's' with 'r':", modified);

let srt = "js js js"
console.log(srt.split("").reverse().join(""))