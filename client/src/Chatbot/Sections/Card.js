import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;

function CardComponent(props) {
    return (
        <div style={{margin:'4px',width:'150px',/*display:'inline-block'*/  }}>
            <Card
               style={{borderRadius:'12px 12px 0px 0px'}}
                cover={
                    <img
                        alt={props.cardInfo.fields.description.stringValue}
                        src={props.cardInfo.fields.image.stringValue} style={{borderRadius:'12px 12px 0 0'}}/>
                }
                actions={[
                    <a target="_blank" rel="noopener noreferrer" href={props.cardInfo.fields.link.stringValue}>
                        <Icon type="ellipsis" key="ellipsis" />
                    </a>
                ]}
            >
               
                <Meta
                    title={props.cardInfo.fields.stack.stringValue}
                    description={props.cardInfo.fields.description.stringValue}
                    //style={{borderRadius:'1px 18px 8px 8px'}}
                />
                

            </Card>
        </div>

    )
}

export default CardComponent
