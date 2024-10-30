import data from '@/components/tabMenu/data';
import cx from '@/components/tabMenu/cs';
import { useState } from 'react';
import VanillaWrapper from '../vanillaWrapper';


const buildTabMenus = (
    {
        id,
        title,
    }:
    {
    id: string,
    title: string,
    }
) => {
    const $li = document.createElement('li')
    $li.classList.add(cx('tab'))
    $li.textContent = title
    $li.setAttribute('data-id', id)

    return (
        $li
    )
}

const buildDescriptions = (
    {
        id,
        description,
    }:
    {
    id: string,
    description: string,
    }
) => {
    const $div = document.createElement('div')
    $div.classList.add(cx('description'))
    $div.textContent = description

    return (
        $div
    )
}

const initiator = (wrapper: HTMLDivElement) => {
    let currentId: string = data[0].id;
    const $container = document.createElement('div')
    $container.classList.add(cx('container'), cx('tabMenu2'))

    const $tabUl = document.createElement('ul')
    $tabUl.classList.add(cx('tabList'))

    const $tabList = data.map(buildTabMenus)
    const $desc = data.map(buildDescriptions)

    $tabUl.append(...$tabList)
    $container.append($tabUl, ...$desc)

    const handleClickTab = (e: Event) => { 
        const $el = e.target as HTMLElement
        if (!$el.classList.contains(cx('tab'))) return
        
        // 하나는 무조건 열려있을 것이므로
        // currentId === null 그런건 필요 x
        currentId = $el.dataset.id || data[0].id;
        if (!currentId) return;
        
        $tabList.forEach(($item, i) => {
            $item.classList.toggle(cx('current'), currentId === $item.dataset.id)
            $desc[i].classList.toggle(cx('current'), currentId === $item.dataset.id)
        })
    }

    $tabUl.addEventListener('click', handleClickTab)
    wrapper.append($container)
    
    // 첫 요소 열려 있도록
    $tabList[0].click()
} 

const TabMenu4V = () => <VanillaWrapper title='#4' initiator={initiator}/>

export default TabMenu4V