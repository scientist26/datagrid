import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './VisualControl.scss';

const VisualControl: React.FC = () => {
  return (
    <div className="visual-control">
      <p className="visual-control__title">Visualisation</p>
      <div className="visual-control__switch">
        <div className="visual-control__switch-wrapper">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <span className="visual-control__switch-val">Asynk</span>
        </div>
        <div className="visual-control__switch-wrapper">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
          <span className="visual-control__switch-val">Virtualize</span>
        </div>
      </div>
    </div>
  );
};

export default VisualControl;
