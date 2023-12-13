import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'ndly62sd4n47a6mydlsn',
  password: 'pscale_pw_ir4sUGRCGfsRjQKyGAJynOyNcS3NEro5nLlPFoMz9zx',
  database: 'movie_db',
});
