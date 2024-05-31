<?php

 $arr = array();

  if ($_POST) {
       $status = true;
       if ($_POST['nome'] == "") {
          $status = false;
          $arr[] = " - O nome precisa ser preenchido.";
       }
       if (($_POST['email'] && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) == false) || !$_POST['email']){
          $status = false;
          $arr[] = " - preencha um email válido.";
       }
     if ($_POST['modelo'] == ""){
         $status = false;
         $arr[] = " - preencha o assunto.";
     }
      if ($_POST['numero'] == ""){
         $status = false;
         $arr[] = " - preencha sua mensagem.";
      }
      if ($status) {
         $para="julianyfatoretto@gmail.com";
         $subject="Contato pelo site";   

         $nome= $_POST['nome'];
         $email= $_POST['email'];
         $modelo = $_POST['modelo'];
         $numero = $_POST['numero'];

         $enviar="<strong>Mensagem de contato</strong><br><br>";
         $enviar.="<br><strong>Nome: </strong> $nome";
         $enviar.="<br><strong>email: </strong> $email";
         $enviar.="<br><strong>Modelo: </strong> $modelo";
         $enviar.="<br><strong>Número: </strong> $numero";

         $header="Content-Type: text/html; charset- utf-8\n";
         $header.="From: $email Replay-to: $email\n";

         $mail = mail($nome,$email,$modelo,$numero);
         if ($mail) {
            $status = true;
            $message = "Enviado com sucesso!";
         } else {
            $status = false;
            $message = "Ocorreu um erro no servidor";
         }
      }
    } else {
    }

    $result = array(
     'message' => $message,
     'status' => $status
    );
    if(!$status && is_array($arr) && count($arr) > 0) {
       $modelo = implode('<br>', $arr);
       $result['message'] = $modelo;
    }
    echo json_encode($result);