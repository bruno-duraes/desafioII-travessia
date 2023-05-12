# Desafio II - Travessia - UNISENAI
**Algoritmo desenvolvido para trabalho da faculdade.**

O desafio consiste em resolver um problema utilizando lógica de programação.

**Cenário:** oito pessoas estão em uma margem de um rio e precisam atravessá-lo. O único meio de transporte para a travessia é uma jangada. As pessoas que precisam atravessar o rio são: pai, mãe, dois filhos, duas filhas, um policial e uma prisioneira.
Porém, para a travessia, algumas regras são obrigatórias e precisam ser seguidas:
1. A jangada só pode carregar duas pessoas por vez;
2. Somente o pai, a mãe e o policial sabem manobrar a jangada;
3. Os filhos não podem ficar com a mãe na ausência do pai em nenhuma
das margens do rio;
4. Os filhos não podem ser transportados pela mãe;
5. As filhas não podem ficar com o pai na ausência da mãe em nenhuma das
margens do rio;
6. As filhas não podem ser transportadas pelo pai;
7. A prisioneira não pode ficar com os membros da família na ausência do
policial.


A partir do apresentando, construa as condicionais que avaliem todas as regras e se elas estão sendo atendidas. As condicionais deverão ser executadas a cada evento previsto para a travessia:
1. Ao sair, a jangada, da margem A.
2. Ao sair, a jangada, da margem B.
3. Ao chegar, a jangada, à margem B. (identifica se todos atravessaram).
A cada um desses eventos, deverão ser contempladas as regras descritas anteriormente, que exigem avaliar:
1. Situação da jangada: quantidade e quais pessoas estão na jangada.
2. Margens: quais pessoas estão nas margens A e B e quais ficarão depois
do desembarque.

