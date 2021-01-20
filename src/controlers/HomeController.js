import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Euclides',
      sobrenome: 'Lins',
      email: 'euclidesvasconcelos01@gmail.com',
      idade: 112,
      peso: 300,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
