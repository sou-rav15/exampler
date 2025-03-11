const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "Cppoutputs");

if (!fs.existsSync(outputPath)) { 
  fs.mkdirSync(outputPath, { recursive: true });
}

// Function to extract relevant errors (remove unwanted path)
const extractRelevantErrors = (compileErrors, filepath) => {
  const fileBaseName = path.basename(filepath);
  const errorLines = compileErrors
    .split("\n")
    .filter(line => line.includes(fileBaseName))  // Filter lines with the relevant file name
    .join("\n");
  
  return errorLines;
};

const executeCpp = (filepath, inputPath = null, timeLimit = 5000, outputLimit = 5000) => {
  const jobId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${jobId}.exe`);

  return new Promise((resolve, reject) => {
    // Compile the C++ code
    const compileProcess = spawn("g++", [filepath, "-o", outPath]);

    let compileErrors = "";

    // Capture compilation errors
    compileProcess.stderr.on("data", (data) => {
      compileErrors += data.toString();
    });

    compileProcess.on("close", (compileCode) => {
      if (compileCode !== 0) {
        // Extract relevant errors and reject
        const relevantErrors = extractRelevantErrors(compileErrors, filepath);
        return reject(`Compilation Error:\n${relevantErrors}`);
      }

      // Start measuring execution time
      const startTime = Date.now(); // Start timer

      const runProcess = inputPath
        ? spawn(outPath, [], { stdio: ['pipe', 'pipe', 'pipe'] }) // Handle input/output streams
        : spawn(outPath);

      // Attach input if provided
      if (inputPath) {
        fs.createReadStream(inputPath).pipe(runProcess.stdin);
      }

      let output = "";
      let error = "";
      let killed = false;

      // Handle stdout (capture output)
      runProcess.stdout.on("data", (data) => {
        output += data.toString();
        if (output.length > outputLimit) {
          runProcess.kill();
          killed = true;
          reject("Error: Output limit exceeded");
        }
      });

      // Handle stderr (capture execution errors)
      runProcess.stderr.on("data", (data) => {
        error += data.toString();
      });

      // Handle timeout
      const timeout = setTimeout(() => {
        runProcess.kill();
        killed = true;
        reject("Error: Code execution timed out");
      }, timeLimit);

      runProcess.on("close", (code) => {
        clearTimeout(timeout);

        if (killed) return;

        const endTime = Date.now(); // End timer
        const executionTime = endTime - startTime; // Calculate execution time in milliseconds

        if (code !== 0) {
          return reject(`Execution Error:\n${error}`);
        }

        resolve({ output, executionTime }); // Resolve with both output and execution time
      });

      runProcess.on("error", (err) => {
        reject(`Error during execution: ${err.message}`);
      });
    });
  });
};

module.exports = executeCpp;