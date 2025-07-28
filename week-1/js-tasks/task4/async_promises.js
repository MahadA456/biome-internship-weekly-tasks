// Simulate async tasks with Promises
function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 1 done');
      resolve(1);
    }, 1000);
  });
}

function task2(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 2 done, input:', input);
      resolve(input + 1);
    }, 1500);
  });
}

function task3(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Task 3 done, input:', input);
      resolve(input + 1);
    }, 1000);
  });
}

// Promise chaining
task1()
  .then(result1 => task2(result1))
  .then(result2 => task3(result2))
  .then(finalResult => {
    console.log('All tasks done, final result:', finalResult);
  });

  async function runTasks() {
  const result1 = await task1();
  const result2 = await task2(result1);
  const finalResult = await task3(result2);
  console.log('All tasks done, final result (async/await):', finalResult);
}

runTasks();
