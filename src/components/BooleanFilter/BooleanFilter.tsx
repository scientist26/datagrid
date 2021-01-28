import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './BooleanFilter.scss';

const BooleanFilter: React.FC = () => {
  return (
    <div className="toggle-filter">
      <p className="toggle-filter__title">Status Filter</p>
      <div className="toggle-filter__switch">
        <div className="toggle-filter__switch-wrapper">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <span className="toggle-filter__switch-val">Online</span>
        </div>
        <div className="toggle-filter__switch-wrapper">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <span className="toggle-filter__switch-val">Offline</span>
        </div>
      </div>
    </div>
  );
};

export default BooleanFilter;
