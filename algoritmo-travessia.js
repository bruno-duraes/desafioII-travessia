let margemA = ['PAI', 'MAE', 'FILHO1', 'FILHO2', 'FILHA1', 'FILHA2', 'POLICIAL', 'PRISIONEIRA'];
let margemB = [];

function travessia(jangada, margemDestino) {
    let tempMargemA = Array.from(margemA);
    let tempMargemB = Array.from(margemB);
    const regras = {
        regra1: () => {
            if (jangada.length > 2 || jangada.length < 1) {
                console.log(`Erro: quantidade de pessoas na jangada (${jangada.length})`);
                return false;
            }
            return true
        },
        regra2: () => {
            let sabemManobrarJangada = ['PAI', 'MAE', 'POLICIAL'];
            if (!jangada.find((abordo) => sabemManobrarJangada.find((sabeManobrar) => abordo == sabeManobrar))) { // Verifica a ausencia de uma pessoa que sabe manobrar a jagada abordo
                console.log(`Erro: Não existe nenhuma pessoa que sabe manobrar a jangada abordo (${jangada.toString()})`);
                return false;
            }
            return true;
        },
        regra3: () => {
            if (tempMargemA.find((pessoa) => pessoa.includes('FILHO'))) { // Verifica se existem filhos na margem A
                if (tempMargemA.find((pessoa) => pessoa == 'MAE')) { // Verifica se a mãe está na margem A
                    if (!tempMargemA.find((pessoa) => pessoa == 'PAI')) { // Verifica se o pai NÃO está na margem A
                        console.log('Erro: Os filhos estão sozinhos com a Mãe na margem A');
                        return false;
                    }
                }
            }

            if (tempMargemB.find((pessoa) => pessoa.includes('FILHO'))) { // Verifica se existem filhos na margem B
                if (tempMargemB.find((pessoa) => pessoa == 'MAE')) { // Verifica se a mãe está na margem B
                    if (!tempMargemB.find((pessoa) => pessoa == 'PAI')) { // Verifica se o pai NÃO está na margem B
                        console.log('Erro: Os filhos estão sozinhos com a Mãe na margem B');
                        return false;
                    }
                }
            }

            return true;
        },
        regra4: () => {
            if (jangada.find((pessoa) => pessoa.includes('FILHO'))) { // Verifica se a jangada está transportando um dos filhos
                if (jangada.find((pessoa) => pessoa == 'MAE')) { // Verifica se a Mãe está abordo
                    console.log(`Erro: Os filhos não podem ser transportaos pela Mãe`);
                    return false;
                }
            }
            return true;
        },
        regra5: () => {
            if (tempMargemA.find((pessoa) => pessoa.includes('FILHA'))) { // Verifica se existem filhas na margem A
                if (tempMargemA.find((pessoa) => pessoa == 'PAI')) { // Verifica se o Pai está na margem A
                    if (!tempMargemA.find((pessoa) => pessoa == 'MAE')) { // Verifica se a Mãe NÃO está na margem A
                        console.log('Erro: As filhas estão sozinhas com o Pai na margem A');
                        return false;
                    }
                }
            }

            if (tempMargemB.find((pessoa) => pessoa.includes('FILHA'))) { // Verifica se existem filhas na margem B
                if (tempMargemB.find((pessoa) => pessoa == 'PAI')) { // Verifica se o Pai está na margem B
                    if (!tempMargemB.find((pessoa) => pessoa == 'MAE')) { // Verifica se a Mãe NÃO está na margem B
                        console.log('Erro: As filhas estão sozinhas com o Pai na margem B');
                        return false;
                    }
                }
            }

            return true;
        },
        regra6: () => {
            if (jangada.find((pessoa) => pessoa.includes('FILHA'))) { // Verifica se a jangada está transportando uma das filhas
                if (jangada.find((pessoa) => pessoa == 'PAI')) { // Verifica se o Pai está abordo
                    console.log('Erro: As filhas não podem ser transportadas pelo Pai');
                    return false;
                };
            }
            return true;
        },
        regra7: () => {
            if (tempMargemA.find((pessoa) => pessoa == 'PRISIONEIRA')) { // Verifica se a Prisioneira está na margem A
                if (!tempMargemA.find((pessoa) => pessoa == 'POLICIAL')) { // Verifica a ausencia do Policial na margem A
                    if (tempMargemA.find((pessoa) => pessoa != 'PRISIONEIRA' && pessoa != 'POLICIAL')) { // Verifica se existe alguem da familia na margem A
                        console.log('A prisioneira está sozinha com a familia na margem A');
                        return false;
                    }
                }
            }

            if (tempMargemB.find((pessoa) => pessoa == 'PRISIONEIRA')) { // Verifica se a Prisioneira está na margem B
                if (!tempMargemB.find((pessoa) => pessoa == 'POLICIAL')) { // Verifica a ausencia do Policial na margem B
                    if (tempMargemB.find((pessoa) => pessoa != 'PRISIONEIRA' && pessoa != 'POLICIAL')) { // Verifica se existe alguem da familia na margem B
                        console.log('A prisioneira está sozinha com a familia na margem B');
                        return false;
                    }
                }
            }

            return true;
        }
    };

    if (regras.regra1()) {
        if (regras.regra2()) {
            if (regras.regra4() && regras.regra6()) {
                jangada.forEach((abordo) => {
                    if (margemDestino.toUpperCase() == 'B') {
                        tempMargemA.forEach((pessoa, i) => {
                            if (pessoa == abordo) tempMargemA.splice(i, 1);
                        });
                        tempMargemB.push(abordo);
                    } else if (margemDestino.toUpperCase() == 'A') {
                        tempMargemB.forEach((pessoa, i) => {
                            if (pessoa == abordo) tempMargemB.splice(i, 1);
                        });
                        tempMargemA.push(abordo);
                    }
                });

                if (regras.regra3() && regras.regra5() && regras.regra7()) {
                    margemA = tempMargemA;
                    margemB = tempMargemB;
                    console.log({ margemA, margemB });
                }
            }
        }
    }
}

travessia(['POLICIAL', 'PRISIONEIRA'], 'B'); // 1 - Policial leva Prisioneira pro lado B
travessia(['POLICIAL'], 'A'); // 2 - Policial retorna sozinho pro lado A
travessia(['POLICIAL', 'FILHA1'], 'B'); // 3 - Policial atravessa com uma das Filhas pro lado B
travessia(['POLICIAL', 'PRISIONEIRA'], 'A'); // 4 - Policial volta com a Prisioneira pro lado A
travessia(['MAE', 'FILHA2'], 'B'); // 5 - Mãe leva a outra filha pro lado B
travessia(['MAE'], 'A'); // 6 - Mãe retorna sozinha pro lado A
travessia(['MAE', 'PAI'], 'B'); // 7 - Mae leva o Pai pro lado B
travessia(['PAI'], 'A'); // 8 - Pai volta sozinho pro lado A
travessia(['POLICIAL', 'PRISIONEIRA'], 'B'); // 9 - Policial leva Prisioneira pro lado B
travessia(['MAE'], 'A'); // 10 - Mãe volta sozinha pro lado A
travessia(['MAE', 'PAI'], 'B'); // 11 - Mãe leva Pai pro lado B
travessia(['PAI'], 'A'); // 12 - Pai retorna sozinho pro lado A
travessia(['PAI', 'FILHO1'], 'B'); // 13 - Pai leva um dos Filhos Pro lado B
travessia(['POLICIAL', 'PRISIONEIRA'], 'A'); // 14 - Policial retorna com a Prisioneira pro lado A
travessia(['POLICIAL', 'FILHO2'], 'B'); // 15 - Policial atravessa com o outro Filho pro lado B
travessia(['POLICIAL'], 'A'); // 16 - Policial retorna Sozinho pro lado A
travessia(['POLICIAL', 'PRISIONEIRA'], 'B'); // 17 - Policial leva Prisioneira pro lado B