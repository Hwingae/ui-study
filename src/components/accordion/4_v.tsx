import data from '@/components/accordion/data';
import cx from '@/components/accordion/cs';
import { useState } from 'react';
import VanillaWrapper from '../vanillaWrapper';

// AccordionItem에 대응하는 친구
const itemBuilder = (
    {
        id,
        title,
        description,
    }: {
        id: string,
        title: string,
        description: string,
    }) => {
        const $li = document.createElement('li');
        $li.classList.add(cx('item'), cx('item3')) // css는 item3을 사용하겠음

        $li.setAttribute('data-id', id) // id 부여

        // 제목
        const $tab = document.createElement('div');
        $tab.classList.add(cx('tab'));
        $tab.textContent = title;

        // 설명
        const $description = document.createElement('div');
        $description.classList.add(cx('description'));
        $description.textContent = description;

        $li.append($tab, $description);
        return $li;
}

// div 안에 element를 그려넣는 것이 initiator의 역할
// JS가 해줄 역할들을 이 안에 작성할 것
const initiator = (wrapper: HTMLDivElement) => {
    let currentId: string | null = null;

    // 아래는 JQuery에서 많이 쓰는 법인데 html 요소를 표기하는 용도
    // (ulElements 이런 식으로 쓰는 사람도 있음)
    const $ul = document.createElement('ul');
    $ul.classList.add(cx('container'));

    // 이벤트 등록 (ul에 달아도 버블링이 일어나 각 아코디언이 클릭된다)
    const handleClickTab = (e: Event) => {
        const $el = e.target as HTMLElement
        if(!$el.classList.contains(cx('tab'))) return;

        // 클릭한 id
        const targetId = $el.parentElement!.dataset.id;

        if(!targetId) return;
        currentId = targetId === currentId ? null : targetId; // 같은애를 클릭하면 닫고 다른애를 클릭하면 걔를 열기
        
        $items.forEach($item => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id) // 뒤에가 있으면 앞의 css를 추가해라
        })
    }
    $ul.addEventListener('click', handleClickTab)

    // 데이터의 각 객체를 ItemBuilder에 전달
    // ItemBuilder는 li에 제목+설명을 붙여서 리턴 (map결과 array)
    // 받은 li 배열을 ul에 붙임
    const $items = data.map(itemBuilder);
    $ul.append(...$items);

    // wrapper에 붙
    wrapper.append($ul);

    // 처음에 wrapper에 넣자마자 첫 친구를 클릭해서 열리게 함
    ($items[0].children[0] as HTMLElement).click()
} 

// 기존에 만든 VanillaWrapper 이용
const Accordion4V = () => <VanillaWrapper title="#4" initiator={initiator}/>
export default Accordion4V;