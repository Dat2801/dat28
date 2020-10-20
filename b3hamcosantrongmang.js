let str = 'a';
let UPPER = 'DAT';
let LOWER = 'dat';
let result = [];

for(var x=0; x<str.length; x++)
{
    if(UPPER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
        result.push(str[x].toUpperCase());
    }
    else
    {
        result.push(str[x]);
    }
}
console.log(result.join(''));