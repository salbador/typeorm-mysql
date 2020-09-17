import { getRepository } from 'typeorm'
import { User } from './entity/User'

export const Bootstrap = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create({ firstName: "Pedro", lastName: "Pecas", age: 18 })
    await userRepo.save(user)
    .then((user) => {
        console.log("New User Saved", user)
    })
    .catch((err) => {
        console.log("Error ", err);
    });
 }