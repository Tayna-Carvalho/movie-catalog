import { db } from '../db.js';
export const getFavorites = (_, res) => {
  const q = 'SELECT * FROM favorite';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
export const addFavorites = (req, res) => {
  const q = 'INSERT INTO favorite(id_user, id_media) VALUES(?)';
  const values = [req.body.idUser, req.body.idMedia];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json('favorito adicionado com sucesso.');
  });
};
export const deleteFavorites = (req, res) => {
  const q = 'DELETE FROM favorite WHERE id_user = ? AND id_media = ?';

  db.query(q, [req.params.idUser, req.params.idMedia], (err) => {
    if (err) {
      return res.status(500).json('Erro ao remover favorito.');
    }
    return res.status(200).json('Favorito removido com sucesso.');
  });
};
