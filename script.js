let offset = 0;

let slayderdedline = document.querySelector('.slayder-dedline')

document.querySelector('.START').addEventListener('click', function(){
    offset = offset +256;
    if(offset > 512){
        offset = 0;
    }

slayderdedline.style.left = -offset + 'px';
});

document.querySelector('.NEXT').addEventListener('click', function(){
    offset =offset -256;
    if(offset < 0){
        offset = 512;
    }

slayderdedline.style.left = -offset + 'px';
});
