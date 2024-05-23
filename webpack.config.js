module.exports = {
  // ... configurações anteriores
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // especifica uma pasta de onde aplicativo e seu conteúdo será servido
    compress: true, // isso vai agilizar o carregamento do arquivo no modo de desenvolvimento
    port: 8080, // abrirá seu site no localhost:8080 (você pode usar outra porta)
    open: true, // o site abrirá automaticamente no navegador depois de executar npm run dev
  },
};
