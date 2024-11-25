import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const { userId } = req;
    const alunos = await Aluno.findAll({
      where: { user_id: userId },
      attributes: ['id', 'nome', 'sobrenome', 'email', 'telefone'],
      order: [['id', 'DESC']],
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const { userId } = req;
      const alunoData = req.body;

      const aluno = await Aluno.create({
        ...alunoData,
        user_id: userId,
      });

      return res.json({
        aluno,
        userId,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const { userId } = req;
      const aluno = await Aluno.findOne({
        where: {
          id,
          user_id: userId,
        },
        attributes: ['id', 'nome', 'sobrenome', 'email', 'telefone'],
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não exite'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findOne({
        where: {
          id,
          user_id: userId,
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não exite'],
        });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
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
          errors: ['Faltando ID'],
        });
      }
      const { userId } = req;

      const aluno = await Aluno.findOne({
        where: {
          id,
          user_id: userId,
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não exite'],
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
}

export default new AlunoController();
