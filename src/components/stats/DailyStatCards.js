import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import './DailyStatCard.css';

function DailyStatCards() {
  return (
    <div className="site-statistic-demo-card custom_style_div">
      <Row gutter={16} className="stat_row">
        <Col span={6}>
          <Card>
            <Statistic
              title="Cured"
              value={11}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Admitted"
              value={65}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Deaths"
              value={11}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total"
              value={65}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DailyStatCards;
