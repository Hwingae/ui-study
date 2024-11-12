import data from "./data"
import cx from "./cx";
import { SyntheticEvent, useEffect, useState } from "react";
import SingleOpenContextProvider, { useSingleOpen } from "./singleOpenContext";

// 컨텍스트를 이용해서 전체에서 하나만 열려 있을 수 있는 툴팁

const Tooltip = ({ id, title, description }: { id: string; title: string; description: string }) => { 
    const [isOpen, toggle] = useSingleOpen(id)

    const handleClick = (e: SyntheticEvent) => { 
        // 밖에서 클릭했을 때 토클 이벤트
        e.stopPropagation()
        toggle(p => p === id ? null : id)
    }

    useEffect(() => { 
        const close = () => toggle(null)
        if (isOpen) { 
            window.addEventListener('click', close, {once: true})
        }
        return () => { 
            window.removeEventListener('click', close);
        }
    }, [isOpen, toggle])

    return (
        <div className={cx('container')}>
            <button className={cx('trigger')} onClick={handleClick}>
                {title}
            </button>
            {
                isOpen && <div className={cx('tooltip')} onClick={e => e.stopPropagation()}>
                    {description}
                </div>
            }
        </div>
    )
}

const Tooltip2 = () => { 
    return (
        <>
            <h3>#2. React <sub>하나만 열리도록</sub></h3>
            <SingleOpenContextProvider>
                {data.map(( d ) => (
                    <Tooltip {...d} key={ d.id} />
                ))}
            </SingleOpenContextProvider>
        </>
    )
}

export default Tooltip2