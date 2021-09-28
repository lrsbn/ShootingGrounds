import { HomeContentDTO } from '../DTOs/HomeContentDTO';

const date = new Date();
const postArray: HomeContentDTO[] = [];
for (var i = 0; i < 100; i++) {
    postArray.push({
        header: `Post Number ${i}`,
        createTime: date,
        content: "This is a testpost! :)",
        userId: `${i % 2 ? "User123" : "User456"}`,
        messageKey: `${i}`
    });
}

export const posts = postArray;