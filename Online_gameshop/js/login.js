$(function () {
    H_login = {};
    H_login.openLogin = function(){
        $('.login-header a').click(function(){
            $('.login').show();
            $('.login-bg').show();
        });
    };
    H_login.closeLogin = function(){
        $('.close-login').click(function(){
            $('.login').hide();
            $('.login-bg').hide();
        });
    };
    H_login.loginForm = function () {
        $("#login-button-submit").on('click',function(){
              var username = $("#username");
              var usernameValue = $("#username").val();
              var password = $("#password");
              var passwordValue = $("#password").val();
            if(usernameValue == ""){
                alert("Username can not be empty");
                username.focus();
                return false;
            }else if(passwordValue == ""){
                alert("Password can not be empty");
                password.focus();
                return false;
            }else{
                alert("Success!");
                setTimeout(function(){
                    $('.login').hide();
                    $('.login-bg').hide();
                    $('.list-input').val('');
                },2000);
            }
        });
    };
    H_login.run = function () {
        this.closeLogin();
        this.openLogin();
        this.loginForm();
    };
    H_login.run();
});