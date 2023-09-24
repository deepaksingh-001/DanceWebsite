// inserting data into mongo db
// to use db use deepakKart
db.items.find()
db.items.insertOne({name:"Samsung S23", price:22000, rating:4.5, qty: 225, sold: 102})
db.items.insertMany([{name:"Moto S23", price:20000, rating:3.5, qty: 125, sold: 302}, {name:"Samsung S23", price:22000, rating:4.5, qty: 225, sold: 102}, {name:"realme S23", price:23000, rating:4.5, qty: 500, sold: 202}])
db.items.find({rating: {$gte: 3.5}})
db.items.find({ $or:[{rating: {$gte: 3.5}}, {price: {$gte: 20000}}]})
db.items.find({rating: {$gte: 3.5}}, {rating: 1, qty: 1})
db.items.deleteOne({price: 22000})
db.items.deleteMany({price: 22000})
db.items.updateOne({name: "Moto S23"}, {$set: {price: 10000}})
db.items.updateMany({name: "Moto S23"}, {$set: {price: 100}})
db.items.updateMany({name: "Moto S23"}, {$set: {price: 100, rating: 1}})