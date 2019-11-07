class TasksController {
  async index(req, res) {
    return await res.json({ message: "List of tasks", user: req.userid });
  }

  async store(req, res) {}

  async show(req, res) {}

  async update(req, res) {}

  async destroy(req, res) {}
}

module.exports = new TasksController();
