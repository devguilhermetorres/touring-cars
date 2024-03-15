function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0].value = item;
}

function dropDown(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

            
function category1(c){
    var item = document.getElementById('iitem-'+c).innerHTML;
    document.getElementsByTagName('input')[1].value = item;
}

function dropDown2(p){
    var e = document.getElementsByClassName('dropDown2')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}