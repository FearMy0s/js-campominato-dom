function Random(min, max) {
    return Math.floor(Math.random() * (max - min+ 1) )+ min;
  }
    Game=Number(prompt("Scegli livello di difficolta 0=facile 1=medio 2=difficile"));
    let difficulty;
    if(Game=== 0){
        difficulty = 10;
    }else if(Game===1){
        difficulty = 50;
    }else{
        difficulty = 100;
    }
    const bombs = [];
    let lose = false;
    const flower = [];
    let score = 0;
    while(bombs.length<16){
        const die = Random(1, 100);
        if(bombs.includes(die) === false){
            bombs.push(die);
        }
    }
    console.log(bombs)
    while(!lose && flower.length<difficulty){
        let Num;
        do{Num=Number(prompt("Prego inserire numero"));}
        while (isNaN(Num)||Num<1||Num>100);
        if(bombs.includes(Num)){
            lose=true;
        }else if(flower.includes(Num)){
            alert("Scegli un altro numero")
        }else{flower.push(Num)
            score = score +1;
        }

    }
    if(lose){
        alert(`Sei Morto con :${score} Punti`)
    } else{
        alert(`Sei Sopravvisuto per questa volta`)
    }

