import { ErrorDTO } from "../DTOs/ErrorDTO";

const errorArray : ErrorDTO[] = [];
errorArray.push({
    errorHeader: "Oops something went wrong",
    errorMessage: "Try reloading the site",
    errorStatus: 402,
    errorKey: "anErrorMessage"
});
// errorArray.push({
//     errorHeader: "Nothing really went wrong",
//     errorMessage: "This is just test data",
//     errorStatus: 402
// });
// errorArray.push({
//     errorHeader: "Why are you still here?",
//     errorMessage: "Go get a life!",
//     errorStatus: 402
// })

export const errors = errorArray;