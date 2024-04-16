import VanillaWrapper from '@/components/vanillaWrapper';

const initiator = (wrapper: HTMLDivElement) => {
    let state = false
    const pElem = document.createElement('p')
    pElem.textContent = '꺼짐'

    const buttonElem = document.createElement('button')
    buttonElem.textContent = '토글'
    buttonElem.addEventListener('click', () => {
        state = !state
        pElem.textContent = state? '켜짐' : '꺼짐'
    })

    const divElem = document.createElement('div')
    divElem.textContent = '테스트2 vanilla'
    divElem.append(buttonElem, pElem)

    wrapper.insertAdjacentElement('beforeend', divElem)
}

const Test_3 = () => <VanillaWrapper initiator={initiator}/>