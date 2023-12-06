import { db } from '../db.js';
export const getWatched = (_, res) => {
  const q = 'SELECT * FROM watched';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
export const addWatched = (req, res) => {
  const q = 'INSERT INTO watched(id_user, id_media) VALUES(?)';
  const values = [req.body.idUser, req.body.idMedia];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json('assistido adicionado com sucesso.');
  });
};
export const deleteWatched = (req, res) => {
  const q = 'DELETE FROM watched WHERE id_user = ? AND id_media = ?';
  db.query(q, [req.params.idUser, req.params.idMedia], (err) => {
    if (err) {
      return res.status(500).json('Erro ao remover favorito.');
    }
    return res.status(200).json('Favorito removido com sucesso.');
  });
};
