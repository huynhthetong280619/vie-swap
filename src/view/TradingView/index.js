import { Button } from 'antd';
import React from 'react'
import { useHistory } from 'react-router';
import TradingViewWidget from 'react-tradingview-widget';

const TradingView = () => {
    const history = useHistory()
    return (
        <div sytle={{
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 9999
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem 0.25rem'
                }}>
                    <div>

                        <Button type="primary" onClick={() => history.goBack()}>Quay trở lại</Button>
                    </div>
                </div>
            </div>
            <TradingViewWidget symbol="BTCUSD" autosize/>

        </div>
    )
}

export default TradingView;