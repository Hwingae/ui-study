import data from '@/components/accordion/data';
import cx from '@/components/accordion/cs';
import { useState } from 'react';

// 이 방식이 검색엔진에도 제일 좋을걸
// block: none이 아니기 때문에
const AccordionItem = (
    {
        id,
        title,
        description,
        initialChecked,
    }: {
        id: string,
        title: string,
        description: string,
        initialChecked: boolean,
    }) => {
    return (
        <li className={cx('item', 'item5')} key={id}>
            {/* input을 숨겨놓고 라벨로 대체. input radio이기에 하나씩 밖에 선택 안됨. */}
            <input
                type='radio'
                name="accordion"
                id={id}
                className={cx('input')}
                defaultChecked={initialChecked}
            />
            <label htmlFor={id} className={cx('tab')}>{ title }</label>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const Accordion5 = () => {
    return <>
        <h3>#5. React <sub>HTML로 작성 (input radio로 처리)</sub></h3>
        <ul className={cx('container')}> 
            {
                data.map((d, i) => (
                    <AccordionItem key={d.id} {...d} initialChecked={i === 0 }/>
                ))
            }
        </ul>
    </>;
};

export default Accordion5