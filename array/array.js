//sort
let person=[
    {name:"ThuZar",age:20},
    {name:"WineWine",age:19},
    {name:"khineThinKyi",age:22},
    {name:"PhyoMyatHlaing",age:21}
];
let a=person.sort((a,b)=> a.age-b.age);
console.log(a);
//find,filter
let price=[12,13,14,16];
let filter=price.filter((price)=>{
    return price>13;
});
console.log(filter);
let find=price.find((p)=>{
    return p>13;
});
console.log(find);
let findindex=price.findIndex((f)=>{
    return f>14;
});
console.log(findindex);
