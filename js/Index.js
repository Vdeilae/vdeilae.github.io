const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    ctx.fillStyle = '#ff0';
    ctx.fillText(letters[Math.floor(Math.random() * letters.length)], mouseX, mouseY);
}

setInterval(draw, 33);

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 中文
document.getElementById('lang-cn').addEventListener('click', () => {
    document.querySelector('.header h1').textContent = 'VFUN官网';
    document.querySelector('.profile-info h2').textContent = 'Vdeilae';
    document.getElementById('signature').textContent = '签名：热爱编程与设计';
    document.getElementById('introduction').textContent = '欢迎来到VFUN官网，这里分享我的学习与生活。';
    document.getElementById('email').textContent = '邮箱: vdeilae@qq.com';
    document.getElementById('tools-title').textContent = '实用工具官网链接';
    document.getElementById('maintenance-title').textContent = '网站维护';
    document.getElementById('maintenance-text').innerHTML = '网站维护不易，赞助点吧，一分两分都是爱！付款时记得备注用于VDLand网站维护。<a href="./sponsor.html">赞助链接(点此跳转)</a>';
    document.getElementById('christmas-title').textContent = '圣诞树';
    document.getElementById('christmas-text').innerHTML = '<a href="./christmas.html">圣诞树(点此跳转)</a>';

    document.querySelector('.footer').textContent = '&copy; 2023 Vdeilae. 保留所有权利。';
    document.getElementById('web-title').textContent = '另一个网站';
    
});

// 英文
document.getElementById('lang-en').addEventListener('click', () => {
    document.querySelector('.header h1').textContent = 'VFUN Official Website';
    document.querySelector('.profile-info h2').textContent = 'Vdeilae';
    document.getElementById('signature').textContent = 'Signature: Love programming and design';
    document.getElementById('introduction').textContent = 'Welcome to VFUN official website, where I share my learning and life.';
    document.getElementById('email').textContent = 'Email: vdeilae@qq.com';
    document.getElementById('tools-title').textContent = 'Useful Tools Official Links';
    document.getElementById('maintenance-title').textContent = 'Website Maintenance';
    document.getElementById('maintenance-text').innerHTML = 'Website maintenance is not easy, please sponsor a bit, every penny counts! Remember to note that it is for VDLand website maintenance when paying. <a href="./sponsor.html">Sponsor Link (Click to jump)</a>';
    document.getElementById('christmas-title').textContent = 'Christmas Tree';
    document.getElementById('christmas-text').innerHTML = '<a href="./christmas.html">Christmas Tree (Click to jump)</a>';
    document.querySelector('.footer').textContent = '&copy; 2023 Vdeilae. All rights reserved. ';
    document.getElementById('web-title').textContent = 'Another Website';
    
});

// 默认加载英文
// window.onload=function(){
//     document.getElementById('lang-en').click();
// }
window.onload = function () {
    // 获取系统语言
    const systemLanguage = navigator.language || navigator.userLanguage;

    // 根据系统语言设置默认语言
    if (systemLanguage.startsWith('zh')) {
        // 中文
        document.getElementById('lang-zh').click();
    } else {
        // 默认英文
        document.getElementById('lang-en').click();
    }
};
