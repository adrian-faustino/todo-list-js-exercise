function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed!`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  }

  return task;
};

// create new tasks by storing them to a variable and calling the new task constructor
const task1 = newTask('Clear room', 'Pick up all the clothes on the floor.');
const task2 = newTask(`Compass`, `Finish all of today's modules.`);
task1.logState();
task2.markCompleted();
task2.logState();
