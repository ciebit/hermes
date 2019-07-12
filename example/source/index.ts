import Hermes from './../../app/Hermes'

document.addEventListener('DOMContentLoaded', () => {
    const printContainer: HTMLElement = document.querySelector('.print')
    const hermes = new Hermes
    let countPrint = 0;

    hermes.addListener('print', printRecursive)

    print('Text')
    
    function print(text: string): void
    {
        const p = document.createElement('p')
        p.textContent = text
        printContainer.appendChild(p)
        hermes.dispatch('print', p)
    }

    function printRecursive(p: HTMLElement): void
    {
        countPrint++
        p.textContent += ' ' + countPrint
        if (countPrint >= 5) {
            hermes.remove('print', printRecursive)
        }
        print('Recursive')
    }
})
