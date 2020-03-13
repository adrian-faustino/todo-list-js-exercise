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
