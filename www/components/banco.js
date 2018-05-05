// This is a JavaScript file


$(document).on("click", "#salvar", function(evt)
    {
        
        if($("#txtNome").val() == ""){
            navigator.notification.alert("Campo nome esta Vazio");
        }
        
        else if($("#txtCpf").val() == ""){
            navigator.notification.alert("Campo CPF esta Vazio");
        }
        else{
            $.ajax({
                type:"get",
                url: "http://jussimarleal.com.br/app/funcao.php",
                data:"acao=inserir&nome="+$("#txtNome").val()+"&cpf="+$("#txtCpf").val(),
                success:function(data){
                    navigator.notification.alert(data);
                },
                error:function(erro, exception){
                    navigator.notification.alert("Deu erro");
                }
            });
        }
  
    });
    
    $(document).on("click", "#listar", function(evt)
    {
        $(location).attr('href',"listar.html");
    });
    
    function listarPessoas(){
        $.ajax({
             type:"get",
             url: "http://jussimarleal.com.br/app/funcao.php",
             data:"acao=listarpessoas",
             dataType:"json",
             success: function(data){
                 var $itemlista = "";
                 $.each(data.registro, function(i,dados){
                    $itemlista += "<input type='radio' name='escolhe' class='' value='" + dados.codigo +"'><label>"+dados.nome+"</label><br>";
                 });
                 $("#lstRelacaoPessoas").html($itemlista);
             },
             error: function(erro, exception){
                  navigator.notification.alert(erro.responseText);
             }
             
         });
    }
    
    $(document).on("click", "#deletar", function(evt)
    {
        var codigo = $("input:radio[name=escolhe]:checked").val();
        $.ajax({
            type:"get",
            url: "http://jussimarleal.com.br/app/funcao.php",
            data:"acao=deletar&codigo="+codigo,
            success: function(data){
                 navigator.notification.alert(data);
                
            },
            error: function(erro, exception){
                 navigator.notification.alert(erro.responseText);
            }
        });
        
        location.reload();
         
    });
    
    function editarPessoa(cod){
        
        $.ajax({
             type:"get",
             url: "http://jussimarleal.com.br/app/funcao.php",
             data:"acao=listaratualizar&codigo="+cod,
             dataType:"json",
             success: function(data){
                 $.each(data.registro, function(i,dados){
                   $("#txtNome").val(dados.nome);
                   $("#txtCpf").val(dados.cpf);
                 });
             },
             error: function(erro, exception){
                  navigator.notification.alert(erro.responseText);
             }
         });
    }
    
    $(document).on("click", "#editar", function(evt)
    {
        var codAlterar = JSON.stringify($("input:radio[name=escolhe]:checked").val());
        sessionStorage.setItem('cod', codAlterar );
        $(location).attr('href',"editar.html");   
         
    });
    
    $(document).on("click", "#salvaredit", function(evt)
    {
        
         $.ajax({
            type:"get",
            url: "http://jussimarleal.com.br/app/funcao.php",
            data:"acao=gravaratualizar&codigo="+$("#txtCod").val()+"&nome="+$("#txtNome").val()+"&cpf="+$("#txtCpf").val(),
            success: function(data){
                 navigator.notification.alert("atualizado com sucesso");
                
            },
            error: function(erro, exception){
                 navigator.notification.alert(erro.responseText);
            }
        });
        $(location).attr('href',"index.html");
 
    });
    