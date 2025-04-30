import 'package:postgres/postgres.dart';

Future<PostgreSQLConnection> connectDB() async {
  var connection = PostgreSQLConnection(
    "switchback.proxy.rlwy.net", // Pegue da aba "Variables"
    21576, // Porta padrão do PostgreSQL
    "railway", // Nome do banco
    username: "postgres",
    password: "ArVWEPtMxStICbnXtxlukrGJwHsmyEpP",
  );

  await connection.open();
  print("Conectado ao PostgreSQL!");
  return connection;
}