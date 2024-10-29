import data from '@/components/accordion/data';
import cx from '@/components/accordion/cs';
import { useEffect, useRef, useState } from 'react';

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
    const descRef = useRef<HTMLDivElement>(null)

    // 아래 onBeforeMatch를 html로 추가 (꼼수)
    useEffect(() => { 
        if (descRef.current) { 
            descRef.current.addEventListener('beforematch', toggle)
        }
        return () => { 
            if(descRef.current) descRef.current.removeEventListener('beforematch', toggle)
        }
     }, [toggle])
    
    return (
        <li className={cx('item', 'item3', {current})} key={id}>
            <div className={cx('tab')} onClick={toggle}>
                {title}
            </div>
            {
                // HIDDEN이 아닌 hidden이면 리액트가 자동으로 초기 undefined 상태일 때 해당 내용을 없애버림
                // html에서는 대소문자를 구분하지 않아서 꼼수로 사용했다고 함
                // 그리고 onBeforeMatch는 새로 등장해서 리액트가 아직 반영을 잘 못하는 듯 보임
                // (원래 div 안에 props로 onBeforeMatch={} 하고 하나 추가해야 함)
            }
            <div className={cx('description')} ref={descRef} HIDDEN={ current ? undefined : 'until-found' }>
                {description}
            </div>
        </li>
    )
}

const Accordion6 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id)

    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id)
    }

    return <>
        <h3>#6. React <sub>ctrl+F 검색 기능</sub></h3>
        <ul className={cx('container')}>
            {
                data.map(d => (
                    <AccordionItem key={d.id} {...d} current={currentId === d.id} toggle={toggleItem(d.id)}/>
                ))
            }
        </ul>
    </>;
};

export default Accordion6