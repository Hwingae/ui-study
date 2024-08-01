// 하나만 열리는 방식(자동으로 닫힘), 여러개 열 수 있음 2종류
// 여러개는 이지피지 하니 1번으로 ㄱㄱㅆ
import cx from '@/components/accordion/cs';
import Accordion1 from '@/components/accordion/1_r';
import Accordion2 from './2_r';
import Accordion3 from './3_r';

const Accordions = () => {
    return(
        <div className={cx('Accordions')}>
            <h2>아코디언1</h2>
            <Accordion1/>
            <Accordion2/>
            <Accordion3/>
        </div>
    )
}

export default Accordions