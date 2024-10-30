import data from '@/components/tabMenu/data';
import cx from '@/components/tabMenu/cs';
import { useState } from 'react';

/*
다음처럼 li 아래에 title, description 묶여있는 형태
<div>
    <li> // 여러개...
        <div>{title}</div>
        <div>{description}</div>
    </li>
</div>
*/
const TabItem = (
    {
        id,
        title,
        current,
        description,
        toggle,
    }: {
        id: string,
        title: string,
        current: boolean,
        description: string,
        toggle: () => void
    }) => {
    return (
        <li className={cx('item', 'item3', { current })} key={id}>
            <div className={cx('tab')} onClick={toggle}>
                {title}
            </div>
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

const TabMenu3 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return <>
        <h3>#3. React <sub>한 li 안에 title/desc 모두 있게 처리</sub></h3>
        <div className={cx('container', 'tabMenu3')}>
            {data.map(d => (
                <TabItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)}/>
            ))}
        </div>
    </>;
};

export default TabMenu3