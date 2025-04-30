import "conect.dart";

Future<void> testConnection() async {
  var conn = await connectDB();
  print("Conexão bem-sucedida!");
}
void main() async {
  await testConnection();
}

