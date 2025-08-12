$(document).ready(function(){
    //adormece
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var checkboxes = $("input[type=checkbox]");
    //checks
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
    //changing checks
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
    //audio loading
    var audBebado = new Audio("werewolfAudio/Bebado.wav");
    var audBruxa = new Audio("werewolfAudio/Bruxa.wav");
    var audCurador = new Audio("werewolfAudio/Curador.wav");
    var audFim = new Audio("werewolfAudio/Fim.wav");
    var audGuardas = new Audio("werewolfAudio/Guardas.wav");
    var audIdiota = new Audio("werewolfAudio/Idiota.wav");
    var audInicio = new Audio("werewolfAudio/Inicio.wav");
    var audInsonia = new Audio("werewolfAudio/Insonia.wav");
    var audInvestigadorParanormal = new Audio("werewolfAudio/InvestigadorParanormal.wav");
    var audLadrao = new Audio("werewolfAudio/Ladrao.wav");
    var audLobisomemAlfa = new Audio("werewolfAudio/LobisomemAlfa.wav");
    var audLobisomemComDorminhoco = new Audio("werewolfAudio/LobisomemComDorminhoco.wav");
    var audLobisomemMistico = new Audio("werewolfAudio/LobisomemMistico.wav");
    var audLobisomemSemDorminhoco = new Audio("werewolfAudio/LobisomemSemDorminhoco.wav");
    var audProblematica = new Audio("werewolfAudio/Problematica.wav");
    var audRevelador = new Audio("werewolfAudio/Revelador.wav");
    var audSentinela = new Audio("werewolfAudio/Sentinela.wav");
    var audSosiaComExceçoes = new Audio("werewolfAudio/SosiaComExceçoes.wav");
    var audSosiaCurador = new Audio("werewolfAudio/SosiaCurador.wav");
    var audSosiaFim = new Audio("werewolfAudio/SosiaFim.wav");
    var audSosiaInsonia = new Audio("werewolfAudio/SosiaInsonia.wav");
    var audSosiaRevelador = new Audio("werewolfAudio/SosiaRevelador.wav");
    var audSosiaSemExceçoes = new Audio("werewolfAudio/SosiaSemExceçoes.wav");
    var audSosiaSubdito = new Audio("werewolfAudio/SosiaSubdito.wav");
    var audSubdito = new Audio("werewolfAudio/Subdito.wav");
    var audVidente = new Audio("werewolfAudio/Vidente.wav");
    var audVidenteAprendiz = new Audio("werewolfAudio/VidenteAprendiz.wav");
    
    //playing audio
    $("#play").click(async function () { 
        //tocar audio de todos, fechem os olhos
        audInicio.play();
        await sleep(audInicio.duration * 1000);
        if(sentinela){
            console.log("sentinela ativa");
            audSentinela.play();
            await sleep(audSentinela.duration * 1000);
        }
        //exceções da sosia: subdito, insonia, curador e revelador
        if(sosia && (subdito || insonia || curador || revelador)){
            console.log("Sosia ativa com indicação das exceções")
            audSosiaComExceçoes.play();
            await sleep(audSosiaComExceçoes.duration * 1000);
            if(sosia && subdito){
                console.log("Sossia faz agora a açao do subdito")
                audSosiaSubdito.play();
                await sleep(audSosiaSubdito.duration * 1000);
            }
            audSosiaFim.play();
            await sleep(audSosiaFim.duration * 1000);
        }
        else if(sosia){
            console.log("Sosia ativa");
            audSosiaSemExceçoes.play();
            await sleep(audSosiaSemExceçoes.duration * 1000);
        }
        if((lobisomem1 || lobisomem2 || lobisomemAlfa || lobisomemMistico) && lobisomemDorminhoco){
            console.log("Lobisomens ativos com dorminhoco");
            audLobisomemComDorminhoco.play();
            await sleep(audLobisomemComDorminhoco.duration * 1000);
        }
        else if(lobisomem1 || lobisomem2 || lobisomemAlfa || lobisomemMistico){
            console.log("Lobisomens ativos sem dorminhoco");
            audLobisomemSemDorminhoco.play();
            await sleep(audLobisomemSemDorminhoco.duration * 1000);
        }
        if(lobisomemAlfa){
            console.log("lobisomem alfa ativo");
            audLobisomemAlfa.play();
            await sleep(audLobisomemAlfa.duration * 1000);
        }
        if(lobisomemMistico){
            console.log("lobisomem mistico ativo");
            audLobisomemMistico.play();
            await sleep(audLobisomemMistico.duration * 1000);
        }
        if(subdito){
            console.log("subdito ativo");
            audSubdito.play();
            await sleep(audSubdito.duration * 1000);
        }
        if(guarda1 || guarda2){
            console.log("guarda ativo");
            audGuardas.play();
            await sleep(audGuardas.duration * 1000);
        }
        if(vidente){
            console.log("vidente ativo");
            audVidente.play();
            await sleep(audVidente.duration * 1000);
        }
        if(videnteAprendiz){
            console.log("vidente aprendiz ativo");
            audVidenteAprendiz.play();
            await sleep(audVidenteAprendiz.duration * 1000);
        }
        if(investigadorParanormal){
            console.log("investigador paranormal ativo");
            audInvestigadorParanormal.play();
            await sleep(audInvestigadorParanormal.duration * 1000);
        }        
        if(ladrao){
            console.log("ladrao ativo");
            audLadrao.play();
            await sleep(audLadrao.duration * 1000);
        }
        if(bruxa){
            console.log("bruxa ativa");
            audBruxa.play();
            await sleep(audBruxa.duration * 1000);
        }
        if(problematica){
            console.log("problematica ativa");
            audProblematica.play();
            await sleep(audProblematica.duration * 1000);
        }
        if(idiota){
            console.log("idiota ativo");
            audIdiota.play();
            await sleep(audIdiota.duration * 1000);
        }
        if(bebado){
            console.log("bebado ativo");
            audBebado.play();
            await sleep(audBebado.duration * 1000);
        }
        if(insonia){
            console.log("pessoa com insonias ativo");
            audInsonia.play();
            await sleep(audInsonia.duration * 1000);
        }
        if(insonia && sosia){
            console.log("sosia faz agora a ação da insonia");
            audSosiaInsonia.play();
            await sleep(audSosiaInsonia.duration * 1000);
        }
        if(revelador){
            console.log("revelador ativo");
            audRevelador.play();
            await sleep(audRevelador.duration * 1000);
        }
        if(revelador && sosia){
            console.log("sosia faz agora a ação do revelador");
            audSosiaRevelador.play();
            await sleep(audSosiaRevelador.duration * 1000);
        }
        if(curador){
            console.log("curador ativo");
            audCurador.play();
            await sleep(audCurador.duration * 1000);
        }
        if(curador && sosia){
            console.log("sosia faz agora a ação do curador");
            audSosiaCurador.play();
            await sleep(audSosiaCurador.duration * 1000);
        }
        audFim.play();
        await sleep(audFim.duration * 1000);
    });
})