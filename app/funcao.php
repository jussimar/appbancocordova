<?php

  $conexao = mysqli_connect("localhost","jussimar","","jussimar_app");

  $acao = $_GET["acao"];


  if($acao == "inserir"){
      $nome = $_GET["nome"];
      $cpf = $_GET["cpf"];
      $query = "insert into pessoa (nm_pessoa, nr_cpf) values ('$nome','$cpf')";
      $result = mysqli_query($conexao, $query);
      
      echo "Cadastrado com sucesso!";
  }

  if($acao == "listarpessoas"){
      $query = "select * from pessoa order by nm_pessoa";
      $result = mysqli_query($conexao, $query);
      if($result){
         $blnFimReg = false;
         $json = "{ \"registro\" : [ ";
         while($linha = mysqli_fetch_assoc($result)){
           if($blnFimReg){
              $json.=", ";
           }
              $json .= "{\"codigo\" : \"" . $linha["cd_pessoa"] . "\",";
              $json .= "\"nome\" : \"" . $linha["nm_pessoa"] . "\",";
              $json .= "\"cpf\" : \"" . $linha["nr_cpf"] . "\"}";
              $blnFimReg = true;
         }
         $json .= '] }';
         echo $json;
      }  
  }

  if($acao == "deletar"){
      $codigo = $_GET['codigo'];

      $query = "delete from pessoa where cd_pessoa = '{$codigo}'";
      mysqli_query($conexao, $query);
      
      echo "Dados excluidos com sucesso!";
  }

  if($acao == "listaratualizar"){
      $codigo = $_GET['codigo'];

      $query = "select * from pessoa where cd_pessoa = {$codigo} ";
      $result = mysqli_query($conexao, $query);
      if($result){
         $blnFimReg = false;
         $json = "{ \"registro\" : [ ";
         while($linha = mysqli_fetch_assoc($result)){
           if($blnFimReg){
              $json.=", ";
           }
              $json .= "{\"codigo\" : \"" . $linha["cd_pessoa"] . "\",";
              $json .= "\"nome\" : \"" . $linha["nm_pessoa"] . "\",";
              $json .= "\"cpf\" : \"" . $linha["nr_cpf"] . "\"}";
              $blnFimReg = true;
         }
         $json .= '] }';
         echo $json;
      }
  }
  if($acao == "gravaratualizar"){
      $codigo = $_GET['codigo'];
      $nome = $_GET['nome'];
      $cpf = $_GET['cpf'];

      $query = "update pessoa set nm_pessoa = '{$nome}', nr_cpf = '{$cpf}' where cd_pessoa = {$codigo} ";
      mysqli_query($conexao, $query);
  }


