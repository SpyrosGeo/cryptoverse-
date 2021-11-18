import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFethcing } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData)
  }, [cryptosList, searchTerm]);

  if (isFethcing) {
    return "loading...";
  }

  return (
    <>
    {!simplified &&(
        
      <div className="search-crypto">
        <Input
          value={searchTerm}
          placeholder="Search Cryptocurency"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )}
      
      <Row className="crypto-card-container" gutter={[32, 32]}>
        {cryptos?.map((currency) => (
          <Col key={currency.id} xs={24} sm={12} lg={6} className="crypto-card">
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="Specific crypto Logo"
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
