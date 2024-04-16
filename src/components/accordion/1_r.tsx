import data from '@/components/accordion/data';
import cx from '@/components/accordion/cs';
import { useState } from 'react';

const AccordionItem = (
    {
        id,
        title,
        description,
        current,
        toggle,
    }: {
        id: string,
        title: string,
        description: string,
        current: boolean,
        toggle: () => void
    }) => {
    return (
        <li className={cx('item', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            {
                current ?
                    <div className={cx('description')}>{description}</div>
                    : null
            }
        </li>
    )
}

const Accordion1 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    // 클로저를 사용
    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return <>
        <h3>#1. React</h3>
        <ul className={cx('container')}>
            {
                data.map(d => (
                    <AccordionItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))
            }
        </ul>
    </>;
};

export default Accordion1