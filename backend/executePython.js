
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const outputPath = path.join(__dirname, "Cppoutputs");

// if (!fs.existsSync(outputPath)) {
//   fs.mkdirSync(outputPath, { recursive: true });
// }
// const executePython = (filepath, inputPath = null) => {
//     return new Promise((resolve, reject) => {
//       const command = inputPath
//         ? `python ${filepath} < ${inputPath}`
//         : `python ${filepath}`;
      
//       exec(command, (error, stdout, stderr) => {
//         if (error) {
//           return reject({ error, stderr });
//         }
//         if (stderr) {
//           return reject(stderr);
//         }
//         resolve(stdout);
//       });
//     });
//   };
//   module.exports=executePython;

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'PythonOutputs');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executePython = (filepath, inputPath = null, timeLimit = 5000, outputLimit = 1000) => {
  return new Promise((resolve, reject) => {
    const args = [filepath];
    const pythonProcess = spawn('python', args);

    if (inputPath) {
      fs.createReadStream(inputPath).pipe(pythonProcess.stdin);
    }

    let stdout = '';
    let stderr = '';
    let timeoutHandle;
    let killed = false;

    const startTime = Date.now(); // Start time for execution

    // Handle stdout
    pythonProcess.stdout.on('data', (data) => {
      stdout += data.toString();

      // If output exceeds the limit, kill the process and reject
      if (stdout.length > outputLimit) {
        pythonProcess.kill();
        killed = true;
        reject({ error: 'Output limit exceeded. Possible infinite loop.' });
      }
    });

    // Handle stderr (capture errors during execution)
    pythonProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    // Handle process close
    pythonProcess.on('close', (code) => {
      clearTimeout(timeoutHandle);

      if (killed) return; // Process already killed due to output limit

      const executionTime = Date.now() - startTime; // Calculate execution time

      if (code !== 0) {
        // Return both stderr and the code as part of the error
        reject({ error: `Python process exited with code ${code}`, stderr });
      } else {
        resolve({ output: stdout, executionTime }); // Include execution time in result
      }
    });

    pythonProcess.on('error', (error) => {
      clearTimeout(timeoutHandle);
      // Return the error message as part of the reject object
      reject({ error: `Error during Python execution: ${error.message}`, stderr });
    });

    // Timeout to handle infinite loops
    timeoutHandle = setTimeout(() => {
      pythonProcess.kill();
      killed = true;
      reject({ error: 'Code execution timed out. Possible infinite loop.' });
    }, timeLimit);
  });
};

module.exports = executePython;
