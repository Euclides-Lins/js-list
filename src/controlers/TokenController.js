import jwt from 'jsonwebtoken';
import User from '../models/Users';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).send({
        errors: ['Credenciais inválidas'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).send({
        errors: ['Não tem usuário assim meu brother'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).send({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 60,
    });

    return res.json(token);
  }
}

export default new TokenController();
