// 하나만 열리는 방식(자동으로 닫힘), 여러개 열 수 있음 2종류
// 여러개는 이지피지 하니 1번으로 ㄱㄱㅆ
import cx from '@/components/tabMenu/cs';
import TabMenu1 from './1_r';

const TabMenus = () => {
    return(
        <div className={cx('TabMenus')}>
            <h2>탭메뉴2</h2>
            <TabMenu1/>
        </div>
    )
}

export default TabMenus