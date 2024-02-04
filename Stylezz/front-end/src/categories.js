// categories = [ [ [ { [ a:[{},{}], b[{},{}] ] } ] ] ]
// category = [ [ { [ a:[{},{}], b[{},{}] ] } ] ]
// miniCategory = [ { [ a:[{},{}], b[{},{}] ] } ]
// miniCategory[idx] = { [ a:[{},{}], b[{},{}] ] }
// miniCategory[idx].obj = [ a:[{}.{}]. b[{}.{}] ]
// miniCategory[idx].obj[idx1] = a: [ {}, {} ]

// categories = [ [ [ { [ a:[{},{}], b[{},{}] ] } ] ] ]
// category = [ [ { [ a:[{},{}], b[{},{}] ] } ] ]
// miniCategory = [ { [ a:[{},{}], b[{},{}] ] } ]
// miniCategory[idx] = { [ a:[{},{}], b[{},{}] ] }
// miniCategory[idx].obj = [ a:[{}.{}]. b[{}.{}] ]
// miniCategory[idx].obj[idx1] = a: [ {}, {} ]

let obj = [
  [
    {
      CATEGORY: [
        { name: "All New Arrivles", url: "" },
        { name: "Premium", url: "" },
        { name: "Shoes", url: "" },
        { name: "Clothing", url: "" },
        { name: "Accessories", url: "" },
      ],
    },

    {
      "FAVOURITE BRANDS": [
        { name: "Nike", url: "" },
        { name: "Addidas original", url: "" },
        { name: "New Balance", url: "" },
        { name: "Asics", url: "" },
      ],
    },
  ],
  [
    {
      CATEGORY: [
        { name: "All Shoes", url: "" },
        { name: "Sneakers", url: "" },
        { name: "Boots", url: "" },
        { name: "High tops", url: "" },
        { name: "Low top", url: "" },
        { name: "Slides", url: "" },
        { name: "Slip-ons", url: "" },
        { name: "Limited editions", url: "" },
        { name: "Sustainable sneakers", url: "" },
        { name: "Shoe care", url: "" },
        { name: "Sandals", url: "" },
        { name: "Summer shoes", url: "" },
        { name: "Laces", url: "" },
        { name: "Men's Shoes on sale", url: "" },
      ],
    },
    {
      PREMIUM: [{ name: "Premium Sneakers", url: "" }],
      SEASON: [
        { name: "Spring", url: "" },
        { name: "Summer", url: "" },
        { name: "Autumn", url: "" },
        { name: "Winter", url: "" },
      ],
      SPORT: [
        { name: "Running", url: "" },
        { name: "Skate", url: "" },
        { name: "Basket", url: "" },
        { name: "Fitness", url: "" },
        { name: "Outdoor", url: "" },
      ],
    },
    {
      "POPULAR MODELS": [
        { name: "adidas Samba", url: "" },
        { name: "adidas Gazelle", url: "" },
        { name: "Nike Air Max", url: "" },
        { name: "Nike Dunk", url: "" },
        { name: "Nike Air Force 1", url: "" },
        { name: "Vans KNU SKOOL", url: "" },
        { name: "Hoka One One Clifton 8", url: "" },
        { name: "New Balance XC-72", url: "" },
        { name: "Asics Gel=Kayano 14", url: "" },
        { name: "On Cloud", url: "" },
        { name: "adidas campus 00s", url: "" },
        { name: "Converse Chuck Taylor 70s", url: "" },
        { name: "Converse Run Star Hike", url: "" },
      ],
    },
    {
      "FAVOURITE BRANDS": [
        { name: "Nike", url: "" },
        { name: "adidas Originals", url: "" },
        { name: "adidas Performance", url: "" },
        { name: "New Balance", url: "" },
        { name: "Y-3", url: "" },
        { name: "Converse", url: "" },
        { name: "Reebok", url: "" },
        { name: "HOKA ONE ONE", url: "" },
        { name: "Vans Vault", url: "" },
        { name: "Vans", url: "" },
        { name: "Asics", url: "" },
        { name: "Puma", url: "" },
        { name: "Salomon Advanced", url: "" },
        { name: "On", url: "" },
      ],
    },
  ],
  [
    {
      CATEGORY: [
        { name: "All All apparel", url: "" },
        { name: "Premium", url: "" },
        { name: "Coats & Jackets", url: "" },
        { name: "Hoodies & Sweaters", url: "" },
        { name: "T-Shirts and shirts", url: "" },
        { name: "Trousers", url: "" },
        { name: "Shorts", url: "" },
        { name: "Shirts", url: "" },
        { name: "Underwear", url: "" },
        { name: "Swimwear", url: "" },
        { name: "Socks", url: "" },
        { name: "Men's clothing on sale", url: "" },
      ],
    },
    {
      SEASON: [
        { name: "Spring", url: "" },
        { name: "Summer", url: "" },
        { name: "Autumn", url: "" },
        { name: "Winter", url: "" },
      ],
    },
    {
      SPORT: [
        { name: "Sport", url: "" },
        { name: "Running", url: "" },
        { name: "Skate", url: "" },
        { name: "Basket", url: "" },
        { name: "Fitness", url: "" },
        { name: "Outdoor", url: "" },
      ],
    },
    {
      "FAVOURITE BRANDS": [
        { name: "Nike", url: "" },
        { name: "Jordan", url: "" },
        { name: "adidas Originals", url: "" },
        { name: "Under Armour", url: "" },
        { name: "The North Face", url: "" },
        { name: "Carhartt WIP", url: "" },
        { name: "Y-3", url: "" },
        { name: "Pleasures", url: "" },
        { name: "Daily Paper", url: "" },
        { name: "Calvin Klein", url: "" },
        { name: "RIPNDIP", url: "" },
        { name: "Columbia", url: "" },
      ],
    },
  ],
  [
    {
      ACCESSORIES: [
        { name: "All accessories", url: "" },
        { name: "Premium", url: "" },
        { name: "Men's accesoories on sale", url: "" },
      ],
    },
    {
      "SHOE ACCESSORIES": [
        { name: "Shoe care", url: "" },
        { name: "Laces", url: "" },
      ],
      "BAGS AND BACKPACKS": [
        { name: "All Bags and Backpacks", url: "" },
        { name: "Hip bags", url: "" },
        { name: "Backpacks", url: "" },
        { name: "Gymsacks", url: "" },
        { name: "Crossbody bags", url: "" },
        { name: "Wallets", url: "" },
        { name: "School backpakcs", url: "" },
      ],
    },
    {
      "CAPS AND HATS": [
        { name: "All Hats", url: "" },
        { name: "Winter hats", url: "" },
        { name: "Caps", url: "" },
        { name: "Bucket hats", url: "" },
      ],
      "ACCESSORIES TO WEAR": [
        { name: "Gloves", url: "" },
        { name: "Scarves", url: "" },
        { name: "Jewelry", url: "" },
        { name: "Watches", url: "" },
        { name: "Sunglasses", url: "" },
      ],
    },
    {
      "OTHER ACCESSORIES": [
        { name: "Gift Vouchers", url: "" },
        { name: "Wallets", url: "" },
        { name: "Fashion accessories", url: "" },
        { name: "Other Accessories", url: "" },
        { name: "Candles and diffusers", url: "" },
      ],
    },
    {
      "FAVOURITE BRANDS": [
        { name: "Nike", url: "" },
        { name: "Jordan", url: "" },
        { name: "adidas Originals", url: "" },
        { name: "Under Armour", url: "" },
        { name: "Vans", url: "" },
        { name: "New Era", url: "" },
        { name: "Casio", url: "" },
        { name: "CREP Protest", url: "" },
        { name: "Lego", url: "" },
        { name: "Carhartt WIP", url: "" },
        { name: "JanSport", url: "" },
      ],
    },
  ],
  [
    {
      "FAVOURITE BRANDS": [
        { name: "All brands", url: "" },
        { name: "A Bathing Ape", url: "" },
        { name: "A-COLD-WALL", url: "" },
        { name: "a.p.c.", url: "" },
        { name: "adidas Originals", url: "" },
        { name: "adidas Performance", url: "" },
        { name: "Asics", url: "" },
        { name: "Ambush", url: "" },
        { name: "Awake NY", url: "" },
        { name: "Birkenstock", url: "" },
        { name: "C.P. Company", url: "" },
        { name: "Calvin Klein", url: "" },
        { name: "Carhartt WIP", url: "" },
        { name: "Casio", url: "" },
        { name: "Columbia", url: "" },
      ],
    },
    {
      "\u200e": [
        { name: "Comme des Garçons SHIRT", url: "" },
        { name: "Converse", url: "" },
        { name: "CREP Protect", url: "" },
        { name: "Daily Paper", url: "" },
        { name: "Dickies", url: "" },
        { name: "Diesel", url: "" },
        { name: "Dr. Martens", url: "" },
        { name: "Filling Pieces", url: "" },
        { name: "Fjällräven", url: "" },
        { name: "Fred Perry", url: "" },
        { name: "Heliot Emil", url: "" },
        { name: "HERON PRESTON", url: "" },
        { name: "Herschel Supply Co", url: "" },
        { name: "HOKA", url: "" },
        { name: "Jordan", url: "" },
      ],
    },
    {
      "\u200e": [
        { name: "KAHRU", url: "" },
        { name: "LEGO", url: "" },
        { name: "Levi's", url: "" },
        { name: "MARKET", url: "" },
        { name: "Medicon Toy", url: "" },
        { name: "Mizuno", url: "" },
        { name: "Moon Boot", url: "" },
        { name: "New Balance", url: "" },
        { name: "New Era", url: "" },
        { name: "Nike", url: "" },
        { name: "On", url: "" },
        { name: "Patta", url: "" },
        { name: "PLEASURES", url: "" },
        { name: "Poutnik by Tilak", url: "" },
        { name: "Puma", url: "" },
      ],
    },
    {
      "\u200e": [
        { name: "RAF SIMMONS", url: "" },
        { name: "Saucony", url: "" },
        { name: "Reebok", url: "" },
        { name: "Timberland", url: "" },
        { name: "Rick Owens DRKSHDW", url: "" },
        { name: "Salomon Advanced", url: "" },
        { name: "UGG", url: "" },
        { name: "Stüssy", url: "" },
        { name: "The North Face", url: "" },
        { name: "Tommy Hilfiger", url: "" },
        { name: "Under Armour", url: "" },
        { name: "Vans", url: "" },
        { name: "Veja", url: "" },
        { name: "Y-3", url: "" },
      ],
    },
  ],
  [
    {
      "DISCOUNT TYPE": [
        { name: "All Sales", url: "" },
        { name: "Last Chance", url: "" },
        { name: "Under 40 Lv", url: "" },
        { name: "Gift vouchers", url: "" },
      ],
      "DISCOUNTS BY AMOUNT": [
        { name: "Sales from 20%", url: "" },
        { name: "Sales from 40%", url: "" },
        { name: "Sales from 60%", url: "" },
      ],
    },
    {
      CATEGORY: [
        { name: "All Categories", url: "" },
        { name: "Shoes", url: "" },
        { name: "Clothing", url: "" },
        { name: "Accessories", url: "" },
      ],
    },
    {
      "DISCOUNTS BY SIZE": [
        { name: "Clothing XS", url: "" },
        { name: "Clothing S", url: "" },
        { name: "Clothing M", url: "" },
        { name: "Clothing L", url: "" },
        { name: "Clothing XL", url: "" },
      ],
    },
    {
      "DISCOUNTS BY BRAND": [
        { name: "Nike", url: "" },
        { name: "Adidas Originals", url: "" },
        { name: "New Balance", url: "" },
        { name: "Converse", url: "" },
        { name: "Vans", url: "" },
      ],
    },
  ],
];

export default obj;
