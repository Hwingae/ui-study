import data from "./data"
import cx from "./cx";
import { useEffect } from "react";

const Tooltip = ({ id, title, description }: { id: string; title: string; description: string }) => { 
    return (
        <details className={cx('details')} data-tooltip={id}>
            <summary className={cx('summary')} data-tooltip-summary>
                {title}
            </summary>
            <div className={cx('tooltip')} onClick={e => e.stopPropagation()}>
                {description}
            </div>
        </details>
    )
}

const Tooltip3 = () => { 
    useEffect(() => { 
        const closeAllTooltip = (e: Event) => {
            const target = e.target as HTMLElement
            // dataset에서는 camelCase로 들어감
            document.querySelectorAll('[data-tooltip]').forEach(elem => {
                // 지금 클릭한 대상이 아닌 다른 애들거는 지워라
                if (elem !== target.parentElement) {
                    elem.removeAttribute('open')
                 }
            })
        }

        window.addEventListener('click', closeAllTooltip)

        return () => {
            window.removeEventListener('click', closeAllTooltip);
        }
    }, [])
    
    return (
        <>
            <h3>#3. React <sub>html details 태그 사용</sub></h3>
            {data.map(( d ) => (
                <Tooltip {...d} key={ d.id} />
            ))}
        </>
    )
}

export default Tooltip3