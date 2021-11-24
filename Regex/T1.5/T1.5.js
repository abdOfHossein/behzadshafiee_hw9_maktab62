// ([a-zA-Z0-9]){8,}
$('#input-pass').keypress(function () { 
    let pass=$('#input-pass').val();
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
    if(regex.test(pass)){
        $('#lbl-pass').css({
            'color':'green'
        })
        $('#input-pass').css({
            'width': '100%',
            'border': '0',
            'border-bottom': '1px green solid'
        })
        $('#alert-p').html('Good:D')

    }
    else{
        $('#lbl-pass').css({
            'color':'red'
        })
        $('#input-pass').css({
            'width': '100%',
            'border': '0',
            'border-bottom': '1px red solid'
        })
        $('#alert-p').html('min8 char and atleast one CapitalLetter and one num and one specialLetter ')
        
    }
});