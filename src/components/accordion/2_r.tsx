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
        <li className={cx('item', 'item2', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>{title}</div>
            {/* 본래 AccordionItem에서 current를 체킹하여 아코디언을 펼친 내용을 삼항연산자로 렌더링 했음 (1_r 참고) */}
            <div className={cx('description')}>{description}</div>
        </li>
    )
}

// 하지만 이렇게 하면 개발자 모드로 element를 살펴보았을 때도 나오지 않음
// SEO에 안좋다고 생각할 수도 있겠다... -> Accordion2는 CSS로 숨긴 버전
// 이렇게 하면 element를 살펴보았을 때 아코디언 내용을 펼치지 않아도 나옴
// 실제로 할 때는 +알파로 visible이 none이여도 검색(Ctrl+F)에 걸리게 하는게 있는데 그걸 써주는게 좋음
const Accordion2 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    // 클로저를 사용
    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return <>
        <h3>#2. React <sub>CSS로 보임/숨김 처리</sub></h3>
        <ul className={cx('container')}>
            {
                data.map(d => (
                    <AccordionItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))
            }
        </ul>
    </>;
};

export default Accordion2