import { memo } from 'react';
import { RoutePath } from '../../constants';
import Nav from './Nav';

const LeftMenu = ({ active }: any) => {
  return (
    <nav>
      <ol>
        <li>
          <Nav to={RoutePath.home}>{active && <span>서비스소개</span>}</Nav>
        </li>
        <li>
          <Nav to={RoutePath.travelGuide}>
            {active && <span>여행가이드</span>}
          </Nav>
        </li>
        <li>
          <Nav to={RoutePath.travelTips}>{active && <span>여행꿀팁</span>}</Nav>
        </li>
        <li>
          <Nav to={RoutePath.customerService}>
            {active && <span>고객센터</span>}
          </Nav>
        </li>
        <li>
          <Nav to={RoutePath.customerSupport}>
            {active && <span>이용문의</span>}
          </Nav>
        </li>
      </ol>
    </nav>
  );
};

export default memo(LeftMenu);
