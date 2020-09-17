import { getRepository } from 'typeorm'
import { User, Tweet } from './entity'

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
    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = 'I finally got a new Post';
    tweet.content = "Well, after a long time of not writting. Now I got a new book comming!";
    tweet.user = user;
    await tweetRepo.save(tweet)
    .then((tweet) => {
        console.log("New tweet Saved", tweet)
    })
    .catch((err) => {
        console.log("Error ", err);
    });
 }

 export const find = async () => {
    const userRepo = getRepository(User);
    const user = await userRepo
        .findOne({ where: {firstName: 'Pedro'}})
        .then((user) => {
            console.log("User: ", user, user.tweets);
        })
        .catch((err) => {
            console.log(err)
        });
 }