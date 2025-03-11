const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const executecpp = (code) => {
  console.log('code->', code);
  return new Promise((resolve, reject) => {
    // Generate a unique file name for the compiled output
    const jobId = `program_${Date.now()}`; // Unique job ID based on the current timestamp
    const outputFileName = `${jobId}.out`;  // Output filename based on the jobId

    // Write the code to a temporary file
    fs.writeFileSync(`${jobId}.cpp`, code);

    // Compile the code
    const process = spawn('g++', [`${jobId}.cpp`, '-o', outputFileName]);

    process.on('error', (err) => {
      console.error('Failed to start g++ process:', err);
      reject('Failed to start compiler');
    });

    process.on('close', (code) => {
      if (code === 0) {
        // If compilation is successful, run the program
        const run = spawn(`./${outputFileName}`);
        let output = '';

        run.stdout.on('data', (data) => (output += data.toString()));
        run.stderr.on('data', (data) => (output += data.toString()));

        run.on('close', () => {
          console.log('output->>>', output);
          // Clean up the temporary files
          fs.unlinkSync(`${jobId}.cpp`);
          fs.unlinkSync(outputFileName);

          resolve(output);
        });
      } else {
        reject('Compilation failed');
      }
    });
  });
};
// JavaScript execution
const executeJs = (code) => {
  return new Promise((resolve, reject) => {
    const process = spawn('node', ['-e', code]); // Executes JavaScript code
    let output = '';

    process.stdout.on('data', (data) => (output += data.toString()));
    process.stderr.on('data', (data) => (output += data.toString()));

    process.on('close', () => resolve(output));
  });
};

// Python execution
const executePython = (code) => {
  return new Promise((resolve, reject) => {
    const process = spawn('python', ['-c', code]); // Executes Python code
    let output = '';

    process.stdout.on('data', (data) => (output += data.toString()));
    process.stderr.on('data', (data) => (output += data.toString()));

    process.on('close', () => resolve(output));
  });
};

// Java execution
const executeJava = (code) => {
  return new Promise((resolve, reject) => {
    const javaFileName = 'Main.java';
    fs.writeFileSync(javaFileName, code); // Save Java code to a file

    const compile = spawn('javac', [javaFileName]); // Compiles the Java code
    compile.on('close', (code) => {
      if (code === 0) {
        const run = spawn('java', ['Main']); // Runs the compiled Java program
        let output = '';

        run.stdout.on('data', (data) => (output += data.toString()));
        run.stderr.on('data', (data) => (output += data.toString()));

        run.on('close', () => {
          fs.unlinkSync(javaFileName); // Cleanup
          resolve(output);
        });
      } else {
        reject('Compilation failed');
      }
    });
  });
};

module.exports = {
  executecpp,
  executeJs,
  executePython,
  executeJava,
};
