let math = prompt('Оценка по математике: ');
let english = prompt('Оценка по английскому: ');
let russian = prompt('Оценка по русскому: ');


function examResultsCheck(math, english, russian){
    if ((Number(math) < 4 && Number(english) < 4 &&  Number(russian) < 4)){
        alert('Поздравляем, вас отчислили!')
        confetti({
            particleCount: 2000,
            spread: 160,
            origin: {
                y:0.9
            }
        });
    }
    else if (Number(math) < 4 || Number(english) < 4 ||  Number(russian) < 4){
        alert('Поздравляем, у вас как минимум одна пересдача!')
        confetti({
            particleCount: 2000,
            spread: 160,
            origin: {
                y:0.9
            }
        });
    }
    else {
        alert('Вы перешли на следующий курс')
    }
}

examResultsCheck(math, english, russian);
