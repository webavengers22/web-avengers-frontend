// import { Button } from '@/components/Button';
import { Button } from '../../components/Button';
import React, { memo } from 'react';
const HomePage = () => {
  
  return <><div>홈화면</div>

  {/* 컴포넌트 호출 테스트 */}
  <Button 
    size="md" 
    type="primary"
    disabled= {false}
    // children= 'Default'
    shape= 'circle'
    variant= 'default'
  >Click me</Button>
  
  </>;
};

export default memo(HomePage);
