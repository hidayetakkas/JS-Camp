import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logging.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component started")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Hido","akkas","İzmir")
let user2 = new User(2,"Engin","demirog","Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(2))
userService.list()

//prototyping
let customer ={id:1, firstName:"hido"}
customer.lastName = "akkas"
console.log(customer.lastName)