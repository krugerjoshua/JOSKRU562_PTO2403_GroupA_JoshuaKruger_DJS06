// A list of provinces:
const provinces = [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
];

// A list of names:
const names = [
    "Ashwin",
    "Sibongile",
    "Jan-Hendrik",
    "Sifso",
    "Shailen",
    "Frikkie",
];

// A list of products with prices:
const products = [
    { product: "banana", price: "2" },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: "8" },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

// 1.) forEach to log each province name in console.
provinces.forEach((element) => console.log(element));

// 2.) map to transform all letters to uppercase
const upperCaseNames = provinces.map((element) => element.toUpperCase());
console.log(upperCaseNames);

// 3.) map to get the lenght of each name
const nameLengths = names.map((element) => element.length);
console.log(nameLengths);

// 4.) sort provinces alpabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 5.) filter to remove provinces containing 'Cape'
const filteredProvinces = provinces.filter(
    (element) => !element.includes("Cape")
);
console.log(filteredProvinces);

// 6.) map and some to determine if name contains the letter 's'
const containsS = names.map((element) => element.includes("s"));
console.log(containsS);

// 7.) reduce to transform the names array into an object mapping names to their respective provinces
const nameToProvince = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log(nameToProvince);

// Single console.log execution
// 1.) logging each product name
products.forEach((product) => console.log(product.product));

// 2.) filter out products with names longer than 5 characters
products.filter((product) => console.log(product.product.length <= 5))

// 3.) reduce to filter out products without prices and calculate total prices
console.log(
  products.reduce((total, { price }) => total + (Number(price) || 0), 0)
)

// 4.) reduce to concatenate all product names into a single string
console.log(products.reduce((acc, product) => acc + product.product, ''))

// 5.) return string "Highest: X. Lowest: Y." from products to see highest and lowest prices
console.log(
  `Highest: ${Math.max(...products.map(({ price }) => Number(price)
  ))}. Lowest: ${Math.min(...products.map(({ price }) => Number(price)))}.`
  )

// 6.) Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original value.
console.log(
  products.map(item =>
    Object.entries(item).reduce((obj, [key, value]) => ({ 
      ...obj, 
      ...(key === "product" ? { name: value } : {}), 
      ...(key === "price" ? { cost: value } : {}) 
    }), {})
  )
);