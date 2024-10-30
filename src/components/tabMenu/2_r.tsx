import data from '@/components/tabMenu/data';
import cx from '@/components/tabMenu/cs';
import { useState } from 'react';

/*
일반적인 형태
<div>
    <tabList>
        <tab></tab> // 나열
        <tab></tab>
        <tab></tab>
        ...
    </tabList>
    <description> ... </description> // 나열
</div>
*/

const TabItem = (
    {
        id,
        title,
        current,
        toggle,
    }: {
        id: string,
        title: string,
        current: boolean,
        toggle: () => void
    }) => {
    return (
        <li className={cx('tab', {current})} key={id} onClick={toggle}>
            {title}
        </li>
    )
}

const TabMenu2 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    // 클로저를 사용
    const toggleItem = (id: string) => () => {
        setCurrentId(id)
    }

    return <>
        <h3>#2. React <sub>다 그려놓고 hidden/show css로 처리</sub></h3>
        <div className={cx('container', 'tabMenu2')}>
            <ul className={cx('tabList')}>
                {
                    data.map(d => (
                        <TabItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                    ))
                }
            </ul>
            {
                data.map(d => (
                    <div className={cx('description', {current: currentId === d.id})}>
                        {d.description || ''}
                    </div>
                ))
            }
        </div>
    </>;
};

export default TabMenu2