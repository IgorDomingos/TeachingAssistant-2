import express = require('express');
import bodyParser = require("body-parser");
import {Aluno} from '../common/aluno';
import {CadastroDeAlunos} from './cadastrodealunos';

var taserver = express();

<<<<<<< HEAD
var alunos: CadastroDeAlunos = new CadastroDeAlunos();
=======
var alunos = [{nome:'Paulo',
              cpf:'683',
              email:'phmb@cin.br',
              metas:{'requisitos':'MA'}},
              {nome:'Mariana',
              cpf:'456',
              email:'@mcb@cin.br',
              metas:{'requisitos':'MPA'}}];
>>>>>>> b9fccd7 (Servidor executando com nodemon e ts-node (erros corrigidos))

taserver.use(bodyParser.json());

taserver.get('/alunos', function (req, res) {
  var aluno: string = JSON.stringify(alunos.getAlunos());
  res.send(aluno);
})

taserver.post('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body; //verificar se é mesmo Aluno!
  aluno = alunos.criar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body;
  aluno = alunos.atualizar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})

taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})