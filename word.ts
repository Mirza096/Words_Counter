import inquirer from "inquirer";

async function main() {
    try {
        const userInput = await inquirer.prompt({
            type: "input",
            name: "paragraph",
            message: "Enter your paragraph to count words"
        });

        const paraInput = userInput.paragraph;

        // For counting letters in the paragraph
        const letterWithoutSpace = paraInput.replace(/\s/g, "");
        const letterCount = letterWithoutSpace.length;

        // For counting words
        const wordArray = paraInput.split(" ");
        const wordCount = wordArray.length;

        console.log(`Total letters in your paragraph are ${letterCount} and total words are ${wordCount}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
