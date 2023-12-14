import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: 'vyjm7d53docv4xuioqu3',
  password: 'pscale_pw_dpOpODEOugUpM7cmVVhpFkEnjJj6K1x0sY73SX3hWAO',
  database: 'multimidias',
});
