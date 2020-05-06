var isVisability = 0;
     
    function toggleNavigation() {
        if (isVisability === 0) {
             document.getElementById('showNavbar').style.display = 'block';
            isVisability = 1;
         } else {
             document.getElementById('showNavbar').style.display = 'none';
            isVisability = 0; 
         }
    }
     
    function getQuote(){
        let quotes = [
        "Люди завжди вміли вбивати краще, ніж будь-яка інша жива істота.",
        "Норма - це ілюзія, що норма для павука, хаос для мухи.",
        "Нехай прибуде з тобою Сила! ",
        "Хьюстон, у нас проблема.",
        "Hasta la vista, baby.",
        "Найкращий спосіб пояснити - це самому зробити!",
        "Чуї, ми вдома.",
        "До нескінченності і далі!",
        "Божевільний той, хто, не вміючи керувати собою, хоче керувати іншими.",
        "Життя — як коробка шоколадних цукерок. Ніколи не знаєш, яка начинка тобі попадеться."
        ];
    
        let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        document.getElementById("quote").innerHTML = randomQuote;
    }