import data from '@/components/tabMenu/data';
import cx from '@/components/tabMenu/cs';
import { useState } from 'react';

/*
tablist도 그리는 법이 정형화 되어있지는 않음

일반적인 형태:
<div>
    <tabList>
        <tab></tab> // 나열
    </tabList>
    <description> ... </description> // 나열
</div>

아코디언처럼 item으로 묶여진 형태 (스타일로 탭 위치 조정):
// 스크린 리더로 읽기 좋음 (순서대로 나와서)
<ul>
    <item> // 여러개...
        <tab>
        <description>
    </item>
</ul>
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

const TabMenu1 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    // 클로저를 사용
    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    const currentData = data.find(item => item.id === currentId)?.description

    return <>
        <h3>#1. React <sub>현재 desc만 html로 렌더링</sub></h3>
        <div className={cx('container')}>
            <ul className={cx('tabList')}>
                {
                    data.map(d => (
                        <TabItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                    ))
                }
            </ul>
            <div className={cx('description')}>
                {currentData || ''}
            </div>
        </div>
    </>;
};

export default TabMenu1