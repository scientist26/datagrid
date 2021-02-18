import React from 'react';
import { RootState, TableDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './WebStatusFilter.scss';
import { checkOnline, checkOffline } from '../../redux/modules/webStatusFilter/webStatusFilter';

const BooleanFilter: React.FC = () => {
  const webStatus = useSelector((state: RootState) => state.webStatusFilterSlice.webStatusFilter);
  const dispatch = useDispatch<TableDispatch>();
  const handleWebStatusOnline = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(checkOnline(e));
  };
  const handleWebStatusOffline = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(checkOffline(e));
  };
  return (
    <div className="toggle-filter">
      <p className="toggle-filter__title">Status Filter</p>
      <div className="toggle-filter__switch">
        <div className="toggle-filter__switch-wrapper">
          <Switch
            onClick={(e: any) => handleWebStatusOnline(e)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={webStatus.online}
          />
          <span className="toggle-filter__switch-val">Online</span>
        </div>
        <div className="toggle-filter__switch-wrapper">
          <Switch
            onClick={(e: any) => handleWebStatusOffline(e)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={webStatus.offline}
          />
          <span className="toggle-filter__switch-val">Offline</span>
        </div>
      </div>
    </div>
  );
};

export default BooleanFilter;
