
const featuredShoe = {
    name: "Nike GT Cut 3",
    brand: "Nike",
    price: 190,
    rating: 9,

    displayInfo: function () {
        return this.name + " by " + this.brand +
            " costs $" + this.price +
            " and has a rating of " + this.rating + "/10.";
    }
};


console.log(featuredShoe.displayInfo());


const shoes = [
    featuredShoe,
    {
        name: "Curry 3Z 25",
        brand: "Under Armour",
        price: 80,
        rating: 8
    },
    {
        name: "Harden Vol. 9",
        brand: "Adidas",
        price: 160,
        rating: 9
    },
    {
        name: "Ja 2",
        brand: "Nike",
        price: 120,
        rating: 8.5
    }
];


const collection = document.getElementById("shoeCollection");

shoes.forEach(function (shoe) {
    const shoeCard = document.createElement("div");

    shoeCard.classList.add("shoe-card");

    shoeCard.innerHTML = `
        <h3>${shoe.name}</h3>
        <p><strong>Brand:</strong> ${shoe.brand}</p>
        <p><strong>Price:</strong> $${shoe.price}</p>
        <p><strong>Rating:</strong> ${shoe.rating}/10</p>
    `;

    collection.appendChild(shoeCard);
});
