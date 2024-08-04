document.addEventListener("DOMContentLoaded", function() {
    const textElement1 = document.getElementById("typing-text");
    const textElement2 = document.getElementById("typing-text-two");
    const buttonSectionOne = document.getElementById("btn-section-one");
    const text1 = textElement1.textContent;
    const text2 = textElement2.textContent;
    const text3 = "Espero que goste!";
    textElement1.textContent = "";
    textElement2.textContent = "";
    textElement1.classList.add("typing");

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;


    function typeText1() {
        if (index1 < text1.length) {
            textElement1.textContent += text1.charAt(index1);
            index1++;
            setTimeout(typeText1, 150); // Ajuste o tempo de acordo com a velocidade desejada
        } else {
            textElement1.classList.remove("typing");
            textElement2.classList.add("typing");
            setTimeout(typeText2, 500); // Adiciona um pequeno atraso antes de começar o segundo texto
        }
    }


    function typeText2() {
        if (index2 < text2.length) {
            textElement2.textContent += text2.charAt(index2);
            index2++;
            setTimeout(typeText2, 100); // Ajuste o tempo de acordo com a velocidade desejada
        } else {
            textElement2.classList.remove("typing");
            setTimeout(startTypeText3, 1000); // Adiciona um pequeno atraso antes de começar o terceiro texto
        }   
    }



    function startTypeText3() {
        textElement2.textContent = ""; // Limpa o conteúdo anterior completamente
        textElement2.classList.add("typing");
        index3 = 0; // Reinicializa o índice
        typeText3();
    }

    function typeText3() {
        if (index3 < text3.length) {
            textElement2.textContent += text3.charAt(index3);
            index3++;
            setTimeout(typeText3, 150); // Ajuste o tempo de acordo com a velocidade desejada
        } else {
            textElement2.classList.remove("typing");
            setTimeout(showButtonOne, 500)
        }
    }

    function showButtonOne(){
        buttonSectionOne.style.display = "block"; // Mostra o botão
        setTimeout(() => {
            buttonSectionOne.style.opacity = 1; // Transição suave para opacidade total
        }, 200);
    }

    typeText1();
});
