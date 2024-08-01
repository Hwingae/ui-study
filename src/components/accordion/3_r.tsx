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
        <li className={cx('item', 'item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

// 애니메이션 추가한 아코디언
const Accordion3 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    // 클로저를 사용
    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return <>
        <h3>#3. React <sub>애니메이션 (transition)</sub></h3>
        <ul className={cx('container')}>
            {
                data.map(d => (
                    <AccordionItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))
            }
        </ul>
    </>;
};

export default Accordion3