// function getCookie(name){
//    const value = `;${docuemnt.cookie}`;
//    const clear_cookies = value.split(`;${name}`);
//    if (clear_cookies.lenght === 2) return clear_cookies.pop().split(';').shift();
//}

//const user_id = getCookie('user_uuid')
//const csrf_token = getCookie('csrf_token')

$(function(){
    $('#menuToggle').on('click', function(){
        $('#menu').toggleClass('menu-open');
        $('#menuToggle').toggleClass('menuToggleRotate');
    });
})

function dialogOpener(id){
    document.getElementById(id).classList.add('dialog-active');
}

function dialogCloser(id){
    document.getElementById(id).classList.remove('dialog-active');
}

$(function(){
    $('.avatar').on('click', function(){
        Array.prototype.forEach.call($('.avatar'), function(item){
            item.classList.remove('avatars-active');
        });
        this.classList.add('avatars-active');
    })
})

$(function(){
    $('#avatar-change-submit').on('click', function(){
        change_avatar_ajax(document.getElementsByClassName('avatars-active')[0].id)
    })
})

$(function(){
    $('#chat-window-call').on('click', function(){
        $('#chat-window').toggleClass('chat-window-active');
        var messageBody = document.querySelector('#messages-container-wrapper');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    })
})

function open_more(id) {
    section_more = document.getElementById(`card_more-${id}`);
    card_elem = document.getElementById(`card-${id}`);
    card_wrapper = card_elem.parentElement;
    Array.prototype.forEach.call($('.card-more'), function(item){
        if (item != section_more){
            item.classList.remove('projects-card-active');
        }
    });
    Array.prototype.forEach.call($('.projects-card-wrapper'), function(item){
        if (item != card_wrapper){
            item.classList.remove('projects-card-wrapper-active');
        }
    });
    section_more.classList.toggle('projects-card-active');
    card_elem.parentElement.classList.toggle('projects-card-wrapper-active');
}

$(function(){
    $('.avatar').on('click', function(){
        submit_button = document.getElementById('avatar-change-submit-href')
        avatar_id = document.getElementsByClassName('avatars-active')[0].id;

        submit_button.href = `accounts/information/change/avatar/${avatar_id}`;
    })
})
