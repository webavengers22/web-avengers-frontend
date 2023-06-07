import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import * as userActions from '../../store/modules/user';
import { RoutePath } from '../../constants';

const MainPage = () => {
//   const {
//     error,
//     username: me,
//     isLoadingLogin,
//   } = useSelector(userActions.userSelector);
//   const dispatch = useDispatch<AppDispatch>();
//   const [errorMessage, setErrorMessage] = useState<string | null>('');
//   const navigate = useNavigate();

  
//   useEffect(() => {
//     if (me) {
//       navigate(RoutePath.main);
//     }
//   }, [me, navigate]);

  return (
    <div>
      <div className="flex h-screen">메인페이지</div>
    </div>
  );
};

export default memo(MainPage);
