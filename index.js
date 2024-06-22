let categories=[
    {
        img_src:"https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100",
        title:"Top Offer",
        href:"",
    },
    {
     img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100",
     title:"Mobiles & Tablets",
     href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100",
        title:"TVs & Appliances",
        href:"",

    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100",
        title:"Electronics",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100",
        title:"Fashion",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100",
        title:"Beauty",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100",
        title:"Home & Kitchen",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100",
        title:"Furniture",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100",
        title:"Travel",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100",
        title:"Grocery",
        href:"",
    }

];
categories.map((element)=>{
    let image=document.createElement("img");
    image.src=element.img_src;
    // console.log(element);
    let title=document.createElement("p");
    title.innerHTML=element.title;
    // div selerate
    let box=document.createElement("div");
    box.append(image,title);
    document.getElementById("categories").append(box);
    
})

let a=document.getElementById("categories");
