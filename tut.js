function doSomething() {

}


const doSomething = () => {

}

<button onClick = {() => { console.log("Hello");

}}>

</button>

//let age = 10;
//&& = setting age to pedro when condition is satisfied,  || is opposite, ? is ifelse with two options separated by :
//let name = age > 10 ? "Pedro" : "Jack";

const Component = () => {

    return age > 10 ? <div> Pedro</div> : <div>Jack </div>
}

//dont have to give a value if a variable with the same name is above
//const name = "Pedro"

const person = {
    name: "Pedro",
    age: 20, 
    isMarried: false,
};

//... copies values from person while changing the name only
const person2 = {...person, name: "Jack"}

let names = ["Pedro", "Jessica", "Carol", "Pedro", "Pedro"];

names.map((name) => {
    //return name + "1";
    return <h1>{name}</h1>
});

names.filter((name) => {
    return name !== "Pedro"
})

Async + Await + Fetch;







