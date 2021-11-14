import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const HomePage = () => {
  const {data,isFetching} = useGetCryptosQuery()
  const globalStats = data?.data.stats
  console.log(data)
  if(isFetching) return 'Loading...'
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
          {/* <Statistic title="Total exchanges" value={millify(globalStats.exchanges)} /> */}
          {/* <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /> */}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
