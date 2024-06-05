/*Read afile content and write it 
* to a new file in reverse order.(reverse line 1-10 to line 10-1)
*/
	

const fs = require('fs');

function reverseFileContent(inputFilePath, outputFilePath) {
    // Read the content of the input file
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading input file:", err);
            return;
        }

        // Split the content into lines and reverse them
        const lines = data.split('\n').reverse();

        // Write the reversed content to the output file
        fs.writeFile(outputFilePath, lines.join('\n'), 'utf8', err => {
            if (err) {
                console.error("Error writing output file:", err);
                return;
            }
            console.log("File content reversed and written to", outputFilePath);
        });
    });
}

// Example usage
const inputFilePath = '/Users/kavithabharathiraja/Documents/Visual_Node_js/Hackathon/input.txt'; // Path to the input file
const outputFilePath = '/Users/kavithabharathiraja/Documents/Visual_Node_js/Hackathon/output.txt'; // Path to the output file

reverseFileContent(inputFilePath, outputFilePath);