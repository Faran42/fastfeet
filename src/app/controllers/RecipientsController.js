import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      complemento: Yup.string(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
      cep: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation error ' });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      rua: Yup.string(),
      numero: Yup.number(),
      complemento: Yup.string(),
      estado: Yup.string(),
      cidade: Yup.string(),
      cep: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation error ' });
    }

    const recipient = await Recipient.findByPk(req.userId);

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await user.update(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}

export default new RecipientsController();
