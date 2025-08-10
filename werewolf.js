$(document).ready(function(){
    var checkboxes = $("input[type=checkbox]");

    var lobisomem1 = false;
    var lobisomem2 = false;
    var subdito = false;
    var suicida = false;
    var vidente = false;
    var ladrao = false;
    var problematica = false;
    var bebado = false;
    var insonia = false;
    var sosia = false;
    var guarda1 = false;
    var guarda2 = false;
    var cacador = false;
    var aldeao1 = false;
    var aldeao2 = false;
    var aldeao3 = false;
    var lobisomemAlfa = false;
    var lobisomemMistico = false;
    var lobisomemDorminhoco = false;
    var sentinela = false;
    var videnteAprendiz = false;
    var revelador = false;
    var investigadorParanormal = false;
    var guardaCostas = false;
    var bruxa = false;
    var curador = false;
    var idiota = false;

    checkboxes.on('change', function(){
        var numChecks = document.querySelectorAll('input[type="checkbox"]:checked').length;
        $("#numberCards").html(numChecks);
        $("#numberPlayers").html(numChecks - 3);
        if($("#lobisomem1").is(":checked")){
            lobisomem1 = true;
        }else{
            lobisomem1 = false;
        }
        if($("#lobisomem2").is(":checked")){
            lobisomem2 = true;
        }else{
            lobisomem2 = false;
        }
        if($("#subdito").is(":checked")){
            subdito = true;
        }else{
            subdito = false;
        }
        if($("#suicida").is(":checked")){
            suicida = true;
        }else{
            suicida = false;
        }
        if($("#vidente").is(":checked")){
            vidente = true;
        }else{
            vidente = false;
        }
        if($("#ladrao").is(":checked")){
            ladrao = true;
        }else{
            ladrao = false;
        }
        if($("#problematica").is(":checked")){
            problematica = true;
        }else{
            problematica = false;
        }
        if($("#bebado").is(":checked")){
            bebado = true;
        }else{
            bebado = false;
        }
        if($("#insonia").is(":checked")){
            insonia = true;
        }else{
            insonia = false;
        }
        if($("#sosia").is(":checked")){
            sosia = true;
        }else{
            sosia = false;
        }
        if($("#guarda1").is(":checked")){
            guarda1 = true;
        }else{
            guarda1 = false;
        }
        if($("#guarda2").is(":checked")){
            guarda2 = true;
        }else{
            guarda2 = false;
        }
        if($("#cacador").is(":checked")){
            cacador = true;
        }else{
            cacador = false;
        }
        if($("#aldeao1").is(":checked")){
            aldeao1 = true;
        }else{
            aldeao1 = false;
        }
        if($("#aldeao1").is(":checked")){
            aldeao2 = true;
        }else{
            aldeao2 = false;
        }
        if($("#aldeao1").is(":checked")){
            aldeao3 = true;
        }else{
            aldeao3 = false;
        }
        if($("#lobisomemAlfa").is(":checked")){
            lobisomemAlfa = true;
        }else{
            lobisomemAlfa = false;
        }
        if($("#lobisomemMistico").is(":checked")){
            lobisomemMistico = true;
        }else{
            lobisomemMistico = false;
        }
        if($("#lobisomemDorminhoco").is(":checked")){
            lobisomemDorminhoco = true;
        }else{
            lobisomemDorminhoco = false;
        }
        if($("#sentinela").is(":checked")){
            sentinela = true;
        }else{
            sentinela = false;
        }
        if($("#videnteAprendiz").is(":checked")){
            videnteAprendiz = true;
        }else{
            videnteAprendiz = false;
        }
        if($("#revelador").is(":checked")){
            revelador = true;
        }else{
            revelador = false;
        }
        if($("#investigadorParanormal").is(":checked")){
            investigadorParanormal = true;
        }else{
            investigadorParanormal = false;
        }
        if($("#guardaCostas").is(":checked")){
            guardaCostas = true;
        }else{
            guardaCostas = false;
        }
        if($("#bruxa").is(":checked")){
            bruxa = true;
        }else{
            bruxa = false;
        }
        if($("#curador").is(":checked")){
            curador = true;
        }else{
            curador = false;
        }
        if($("#idiota").is(":checked")){
            idiota = true;
        }else{
            idiota = false;
        }
    })

    //var fim = false
    $("#play").click(function () { 
        if(sentinela){
            console.log("sentinela ativa");
        }
        //exceções da sosia: subdito, insonia, curador e revelador
        if(sosia && (subdito || insonia || curador || revelador)){
            console.log("Sosia ativa com indicação das exceções")
            if(sosia && subdito){
                console.log("Sossia faz agora a açao do subdito")
            }
        }
        else if(sosia){
            console.log("Sosia ativa");
        }
        if((lobisomem1 || lobisomem2 || lobisomemAlfa || lobisomemMistico) && lobisomemDorminhoco){
            console.log("Lobisomens ativos com dorminhoco");
        }
        else if(lobisomem1 || lobisomem2 || lobisomemAlfa || lobisomemMistico){
            console.log("Lobisomens ativos sem dorminhoco");
        }
        if(lobisomemAlfa){
            console.log("lobisomem alfa ativo");
        }
        if(lobisomemMistico){
            console.log("lobisomem mistico ativo");
        }
        if(subdito){
            console.log("subdito ativo");
        }
        if(guarda1 || guarda2){
            console.log("guarda ativo");
        }
        if(vidente){
            console.log("vidente ativo");
        }
        if(videnteAprendiz){
            console.log("vidente aprendiz ativo");
        }
        if(investigadorParanormal){
            console.log("investigador paranormal ativo");
        }        
        if(ladrao){
            console.log("ladrao ativo");
        }
        if(bruxa){
            console.log("bruxa ativa");
        }
        if(problematica){
            console.log("problematica ativa")
        }
        if(idiota){
            console.log("idiota ativo");
        }
        if(bebado){
            console.log("bebado ativo");
        }
        if(insonia){
            console.log("pessoa com insonias ativo");
        }
        if(insonia && sosia){
            console.log("sosia faz agora a ação da insonia");
        }
        if(revelador){
            console.log("revelador ativo");
        }
        if(revelador && sosia){
            console.log("sosia faz agora a ação do revelador");
        }
        if(curador){
            console.log("curador ativo");
        }
        if(curador && sosia){
            console.log("sosia faz agora a ação do curador");
        }     
    });
})