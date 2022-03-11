class Tshirt {
  constructor(nom, color, taille, image) {
    this.nom = nom;
    this.color = color;
    this.taille = taille;
    this.image = image;
  }
}

let tshirt = [];

tshirt.push(
  new Tshirt(
    "Kevin",
    "red",
    "S",
    "https://www.skhouston.com/pub/media/catalog/product/cache/249608ba4171d44d21805ed7657a13ae/t/s/tshirt_v_neck_red_magic_1_1.jpg"
  )
);

tshirt.push(
  new Tshirt(
    "Bob",
    "green",
    "L",
    "https://m.media-amazon.com/images/I/61a3FIXG2bL._AC_UX342_.jpg"
  )
);

tshirt.push(
  new Tshirt(
    "HO",
    "black",
    "XL",
    "https://media.dior.com/couture/ecommerce/media/catalog/product/9/e/1594849779_043J615A0589_C980_E08_GHC.jpg?imwidth=800"
  )
);
console.log(tshirt);

let size = new Set();
for (let t of tshirt) {
  size.add(t.taille);
}
console.log(size);

let color = new Set();
for (let t of tshirt) {
  color.add(t.color);
}
console.log(color);

function filterTaille(tableu, taille) {
  return tableu.filter((t) => t.taille === taille);
}

function filterColour(tshirt, color) {
  let tab = [];
  for (const t of tshirt) {
    if (t.color === color) tab.push(t);
  }
  return tab;
}
console.log(filterTaille(tshirt, "XL"));
