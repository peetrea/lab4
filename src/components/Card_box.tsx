import React from 'react';
import { Card } from 'antd';

const Card_box = ({cards}:{cards:Array<string>}) =>{

    return(
    <div className='grid-3'>
        {cards.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
            <Card title={card.title} bordered={false} style={{ width: 300 }} >
            <p> {card.univerity} </p>
            <p> {card.age}</p>
            <p> {card.text}</p>
        </Card>
         </div>
        ))}
        
    </div>
        
    )
}

export default  Card_box;