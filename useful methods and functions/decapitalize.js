// decapitalize
// turns the first letter of a string into lowercase

const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join("");

decapitalize("FooBar"); // 'fooBar'
decapitalize("FooBar"); // 'fooBar'
