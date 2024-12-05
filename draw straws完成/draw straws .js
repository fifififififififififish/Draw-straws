$('#img-shake').hide();


$('#start').on('click',getResult);

function getResult(){
    var content=$('#textarea').val();
    var options = content.split('\n');
    var rand= Math.floor(Math.random()*options.length);
    
    $('#img-shake').show();
    $('#img-ok').hide();
    $('#result').text('等待開獎結果...');
    setTimeout(function() {
        $('#img-shake').hide();
        $('#img-ok').show();
        $('#result').text('開獎結果:' + options[rand]);
    }, 3000);
    
}
