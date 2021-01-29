import Aluno from '../models/Aluno';

class StudentController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        errors: ['Falta id'],
      });
    }

    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Não existe esse aluno'],
      });
    }

    return res.json(aluno);
  }

  async store(req, res) {
    try {
      const novoUser = await Aluno.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Falta id'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Não existe esse aluno'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const aluno = await Aluno.findByPk(id);

    if (!aluno) {
      return res.status(400).json({
        errors: ['Não existe esse aluno'],
      });
    }

    await aluno.destroy();
    return res.json('Aluno deletado');
  }
}

export default new StudentController();
