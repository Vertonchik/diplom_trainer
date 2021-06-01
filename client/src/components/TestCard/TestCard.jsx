import React from 'react';
import { cnTestCard } from './TestCard.index';
import { testTypeNames } from 'utils/constants';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './TestCard.scss';

export const TestCard = ({
  data
}) => {

  const history = useHistory();

  const testOnclick = () => {
    if (data.testPassword) {
      const enteredPassworf = prompt('Введите пароль');
      if (enteredPassworf === data.testPassword) history.push(`/test/${data._id}`);
    } else {
      history.push(`/test/${data._id}`);
    }
  }

  return <div onClick={testOnclick} className={cnTestCard('Wrapper')}>
    {/* <NavLink to={`/test/${data._id}`}> */}
      <div>
        <div className={cnTestCard('Title')}>
          {data.nameTest}
        </div>

        <div className={cnTestCard('Desc')}>
          {data.descriptionTest}
        </div>
      </div>
      
    {/* </NavLink> */}
  </div>
}
