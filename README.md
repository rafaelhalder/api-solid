#App

Gympass style app

#RFs (Requisitos funcionais)
[ ] Deve ser possivel se cadastrar
[ ] deve ser possivel se autenticar
[ ] deve ser possivel  obter o perfil de um usuario logado
[ ] deve ser possivel obter o numero de check-ins realizados pelo usuario logado
[ ] deve ser possivel o usuario obter seu historico de check-ins
[ ] deve ser possivel o usuario buscar academias proximas
[ ] deve ser possivel buscar academias pelo nome
[ ] deve ser possivel o usuario realizar check-in em uma academia
[ ] deve ser possivel validar o check-in de um usuario
[ ] deve ser possivelcadastrar uma academia


#RNs( regra de negocios)

[ ] O usuario não deve poder se cadastrar com um e-mail duplicado
[ ] O usuario não pode fazer 2 check-ins no mesmo dia
[ ] O usuario não pode fazer check-in se não estiver perto (100m) da academia
[ ] O check-in so pode ser validado ate 20 minutos apos criado
[ ] O check-in so pode ser validado por administradores
[] a academia so pode ser cadastrada por administradores

RNFs (Requisitos não funcionais)

[] a senha do usuario precisa estar criptografada
[] os dados da aplicação precisam estar persitidos em um banco postgres
[] todas listas de dados precisar estar paginadas com 20 itens por pagina
[] o usiario deve ser identificado por jwt