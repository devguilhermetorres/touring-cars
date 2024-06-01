function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0].value = item;
}

function category1(c){
    var item = document.getElementById('iitem-'+c).innerHTML;
    document.getElementsByTagName('input')[1].value = item;
}

function dropDown(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

function dropDown2(p){
    var e = document.getElementsByClassName('dropDown2')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}




function category2(c){
    var item2 = document.getElementById('item2-'+c).innerHTML;
    document.getElementsByTagName('input')[10].value = item2;
}

function category3(c){
    var item2 = document.getElementById('iitem2-'+c).innerHTML;
    document.getElementsByTagName('input')[11].value = item2;
}

function dropDown3(p){
    var e = document.getElementsByClassName('dropDown3')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

function dropDown4(p){
    var e = document.getElementsByClassName('dropDown4')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}